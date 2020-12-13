const {createCliente} = require("../controlers/ControllerCliente");
const express = require("express");
let router = express.Router();

    /**
     * @swagger
     * /cliente:
     *  post:
     *    description: 
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.post("/cliente", createCliente);



module.exports = router;
