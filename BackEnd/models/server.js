import express from 'express';
import cors from 'cors';
import {dbConnection} from '../database/config.js';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from '../swaggerConfig.js';

import usuarios from '../routes/usuarios.routes.js'

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = "/api/usuarios";
        this.connectDB();
        this.middleware();
        this.routes();
    }

    async connectDB(){
        await dbConnection();
    }

    middleware(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use(this.usuariosPath, usuarios)
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    }

    listen(){
        this.app.listen(this.port, ()=>{
            console.log(`estamos en el puerto ${this.port}`);
        })
    }
}

export default Server;