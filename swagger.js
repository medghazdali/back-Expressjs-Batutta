// swagger.js

const swaggerJsdoc = require('swagger-jsdoc');
const path = require('path');

// Basic metadata for your API
const swaggerDefinition = {
  openapi: '3.0.0', // or 3.1.0
  info: {
    title: 'Batutta App API',
    version: '1.0.0',
    description: 'API documentation for Batutta App'
  },
  servers: [
    {
      url: 'http://localhost:3000', // Your local server URL
      description: 'Local server'
    }
  ]
};

// Options for swagger-jsdoc
const options = {
  swaggerDefinition,
  // Path to files where you have JSDoc comments for endpoints (routes, controllers, etc.)
  apis: [path.join(__dirname, './routes/*.js'), path.join(__dirname, './controllers/*.js')]
};

const swaggerSpec = swaggerJsdoc(options);
console.log(swaggerSpec.paths); // see if /api/cities is present

module.exports = swaggerSpec;
