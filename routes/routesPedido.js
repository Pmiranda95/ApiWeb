const RoutesPedido = (app) => {
    /**
     * @swagger
     * pedidos:
     *  get:
     *    description: trae todos los pedidos generados
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    app.get("/pedidos", (req, res) => {
        res.status(200).send("Customer results");
      });
      
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
        res.status(200).send("Customer results");
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
        res.status(200).send("Customer results");
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
        res.status(200).send("Customer results");
      });
}

exports.RoutesPedido = RoutesPedido;