import dotenv from 'dotenv';
import express from 'express';
import cors from 'cors';
import swaggerUI from 'swagger-ui-express';
import swaggerSpec from '../swaggerConfig.js';

import usuariosRouter from '../routes/usuarios.routes.js';
import empleadosRouter from '../routes/empleados.routes.js';
import indicadoresRouter from '../routes/indicadores.routes.js';
import panelesRouter from '../routes/paneles.routes.js';
import reportesRouter from '../routes/reportes.routes.js';

dotenv.config()

class Server{
    constructor(){
        this.app = express();
        this.port = process.env.PORT

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use(cors());
        this.app.use(express.json());
    }

    routes(){
        this.app.use("/usuarios", usuariosRouter);
        this.app.use("/empleados", empleadosRouter);
        this.app.use("/indicadores", indicadoresRouter);
        this.app.use("/paneles", panelesRouter);
        this.app.use("/reportes", reportesRouter);
        this.app.use('/api-docs', swaggerUI.serve, swaggerUI.setup(swaggerSpec));
    }

    listen(){
        this.app.listen(this.port,()=>{
            console.log(`Server conected on Port ${this.port}`);
        })
    }
}

export default Server