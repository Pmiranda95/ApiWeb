const express = require("express");
const app = express();
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");
const sequelize = require("./database/db");
const pedidos = require("./routes/routesPedido")
const clientes = require("./routes/routesCliente");
const productos = require("./routes/routesProducto");
const items = require("./routes/routesItems");
const User = require("./database/models/user");
const Pedido = require("./database/models/Pedido");
const Producto = require("./database/models/Producto");
const Cliente = require("./database/models/Cliente");
const Direccion = require("./database/models/Direccion");
const Imagen = require("./database/models/Imagen");

const upload = require('./lib/storage');
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
    apis:["./routes/routesPedido.js","./routes/routesCliente.js","./routes/routesProducto.js","./routes/routesItems.js"]
}

const swaggerDocs = swaggerJsDoc(swaggerOption);
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use("/public",express.static(`${__dirname}/storage/imgs`));
//routes
app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));  
app.use("/V1",pedidos)
app.use("/V2",clientes);
app.use("/V3",productos);
app.use("/V4",items);

app.post('/prueba',upload.single('image'))

app.listen(3000, () => {
 console.log("El servidor está inicializado en el puerto 3000");
 sequelize.sync({force:true}).then(()=>{
     console.log("se conecto a la base de datos");
 }).catch(error=>{
     console.log("se a producido en error: "+error);
 })
});

