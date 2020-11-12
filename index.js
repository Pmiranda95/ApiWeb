const express = require("express");
const routes = require("./routes");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

//Swagger documents
const swaggerOption = {
    swaggerDefinition:{
        info:{
            title:'Api web',
            description:'Customer Api information',
            contact:{
                name:'Amazing developer'
            },
            server:["http://localhost:3000"]
        }
    },
    apis:["routes.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOption);

routes.Routes(app,swaggerUi,swaggerDocs);


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
});

