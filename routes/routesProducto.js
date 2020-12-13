const {createProducto,getPruductos,editProducto,deleteProducto} = require("../controlers/ControllerProducto");

const express = require("express");
let router = express.Router();


    /**
     * @swagger
     * /productos:
     *  get:
     *    description: trae todos los pedidos generados
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.get("/productos", getPruductos);

    /**
     * @swagger
     * /producto:
     *  post:
     *    description: Alta de nuevo producto
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.post("/producto", createProducto);


      
    /**
     * @swagger
     * /producto/{idProducto}:
     *  put:
     *    description: modifica el Producto por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.put("/producto/:idProducto",editProducto);
    
    /**
     * @swagger
     * /producto/{idProducto}:
     *  delete:
     *    description: elimina el producto por id
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.delete("/producto/:idProducto", deleteProducto);


module.exports = router;
