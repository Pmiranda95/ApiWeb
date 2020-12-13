const {getPedidos} = require("../controlers/ControllerPedido");
const {createPedido} = require("../controlers/ControllerPedido");

const express = require("express");
let router = express.Router();


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
    router.get("/pedidos",getPedidos);
      
    /**
     * @swagger
     * /pedido:
     *  post:
     *    description: Alta nuevo pedido
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.post("/pedido", createPedido);
     
    /**
     * @swagger
     * /pedido/{idPedido}:
     *  put:
     *    description: modifica el pedido por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.put("/pedidos/:idPedido", (req, res) => {
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
    router.delete("/pedido/:idPedido", (req, res) => {
        res.status(200).send("Customer resu");
      });
   

module.exports = router;
