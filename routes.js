const {getUsers,createUser} = require("./controlers/ControllerUser");
const {createProducto,getPruductos,getProductoById,editProducto,deleteProducto} = require("./controlers/ControllerProducto");
const {createPedido,getPedidos} = require("./controlers/ControllerPedido");
const {createCliente} = require("./controlers/ControllerCliente");
const {createItem,getItems} = require("./controlers/ControllerItem");

const Routes = (app,swaggerUi,swaggerDocs) => {
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));

    /**
     * @swagger
     * /pedidos:
     *  get:
     *    description: trae todos los pedidos generados
     *    responses:
     *      '200':
     *          description: A Succesful response 
     *      '400':
     *          description: no existen pedidos 
     *    parameters:
     *       'id': 
     */
    app.get("/pedidos",getUsers);
      
    /**
     * @swagger
     * /pedido:
     *  post:
     *    description: Alta nuevo pedido
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.post("/pedido", createPedido);
     
    /**
     * @swagger
     * /pedido/{idPedido}:
     *  put:
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.put("/pedidos/:idPedido", (req, res) => {
        res.status(200).send("Customer resul");
      });
     
    /**
     * @swagger
     * /pedido/{idPedido}:
     *  delete:
     *    description: elimina el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.delete("/pedido/:idPedido", (req, res) => {
        res.status(200).send("Customer resu");
      });
    /**
     * @swagger
     * /productos:
     *  get:
     *    description: trae todos los pedidos generados
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.get("/productos", getPruductos);

    /**
     * @swagger
     * /producto:
     *  post:
     *    description: Alta de nuevo producto
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.post("/producto", createProducto);


      
    /**
     * @swagger
     * /producto/{idProducto}:
     *  put:
     *    description: modifica el Producto por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.put("/producto/:idProducto",editProducto);
    
    /**
     * @swagger
     * /producto/{idProducto}:
     *  delete:
     *    description: elimina el producto por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.delete("/producto/:idProducto", deleteProducto);

    /**
     * @swagger
     * /cliente:
     *  post:
     *    description: 
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.post("/cliente", createCliente);

     /**
     * @swagger
     * /item:
     *  post:
     *    description: 
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.post("/item", createItem);

    /**
     * @swagger
     * /items:
     *  get:
     *    description: 
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.get("/items", getItems);
}

exports.Routes = Routes ;