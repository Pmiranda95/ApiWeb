const {getUsers,getUserById} = require("./controlers/ControllerUser");

const Routes = (app,swaggerUi,swaggerDocs) => {
    app.use("/api-docs",swaggerUi.serve,swaggerUi.setup(swaggerDocs));

    /**
     * @swagger
     * pedidos:
     *  get:
     *    description: trae todos los pedidos generados
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.get("/pedidos",getUsers);
      
    /**
     * @swagger
     * pedido:
     *  post:
     *    description: Alta nuevo pedido
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.post("/pedido", (req, res) => {
        res.status(200).send("Customer result");
      });
     
    /**
     * @swagger
     * pedido:
     *  put:
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.put("/pedidos", (req, res) => {
        res.status(200).send("Customer resul");
      });
     
    /**
     * @swagger
     * pedido:
     *  delete:
     *    description: elimina el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.delete("/pedido", (req, res) => {
        res.status(200).send("Customer resu");
      });
    /**
     * @swagger
     * productos:
     *  get:
     *    description: trae todos los pedidos generados
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.get("/productos", (req, res) => {
        res.status(200).send("Customer results");
      });

    /**
     * @swagger
     * producto:
     *  post:
     *    description: Alta de nuevo producto
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.post("/producto", (req, res) => {
        res.status(200).send("Customer results");
      });


      
    /**
     * @swagger
     * producto:
     *  put:
     *    description: modifica el Producto por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.put("/producto", (req, res) => {
        res.status(200).send("Customer results");
      });
    
    /**
     * @swagger
     * producto:
     *  delete:
     *    description: elimina el producto por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.delete("/producto", (req, res) => {
        res.status(200).send("Customer results");
      });
}

exports.Routes = Routes ;