const { createImagen } = require("../controlers/ControllerImagen");
const express = require("express");
const upload = require('../lib/storage');
let router = express.Router();

     /**
     * @swagger
     * /imagen:
     *  post:
     *    description: 
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.post("/imagen", upload.single('image'), createImagen);


module.exports = router;
