const RoutesProducto = (app) => {
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

exports.RoutesProducto = RoutesProducto;