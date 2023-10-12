// swaggerConfig.js

import swaggerJsdoc from 'swagger-jsdoc';

const options = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'API del proyecto final',
      version: '3.0.0',
      description: 'Documentación de la API del proyecto final',
    },
    servers:[
        {
            url: "http://localhost:5026"
        }
    ]
  },
  apis: ['./routes/empleados.routes.js', './routes/usuarios.routes.js', './routes/paneles.routes.js', './routes/reportes.routes.js', './routes/indicadores.routes.js'], // Rutas de tus controladores
};

const swaggerSpec = swaggerJsdoc(options);

export default swaggerSpec;