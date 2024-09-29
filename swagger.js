// swagger.js
import swaggerJSDoc from 'swagger-jsdoc';

const swaggerDefinition = {
    openapi: '3.0.0',
    info: {
        title: 'Astrologer Connection API',
        version: '1.0.0',
        description: 'API documentation for connecting users with astrologers',
    },
    servers: [
        {
            url: 'http://localhost:5000',
        },
    ],
};

const options = {
    swaggerDefinition,
    apis: ["./swaggerDocument.js"], // Path to the API docs
};

const swaggerSpec = swaggerJSDoc(options);

export default swaggerSpec;
