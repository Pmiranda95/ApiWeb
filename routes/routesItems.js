const {createItem,getItems} = require("../controlers/ControllerItem");
const express = require("express");
let router = express.Router();


     /**
     * @swagger
     * /item:
     *  post:
     *    description: 
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.post("/item", createItem);

    /**
     * @swagger
     * /items:
     *  get:
     *    description: 
     *    responses:
     *      '200':
     *          description: A Succesful response 
     */
    router.get("/items", getItems);


module.exports = router;
