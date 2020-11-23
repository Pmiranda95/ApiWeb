const express = require("express");
const routes = require("./routes");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const sequelize = require("./database/db");
const bodyParser = require('body-parser');
const User = require("./database/models/user");
const Pedido = require("./database/models/Pedido");
const Producto = require("./database/models/Producto");
const Cliente = require("./database/models/Cliente");
const Direccion = require("./database/models/Direccion");

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
//routes
app.use(express.json());
app.use(express.urlencoded({extended:false}));
routes.Routes(app,swaggerUi,swaggerDocs);


app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
 sequelize.sync({force:false}).then(()=>{
     console.log("se conecto a la base de datos");
 }).catch(error=>{
     console.log("se a producido en error: "+error);
 })
});

