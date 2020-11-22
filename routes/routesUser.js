module.exports = {
  
getUsers = (app) => {
  
    console.log("enter a user routes");
    /**
    * @swagger
    * lala:
    *  get:
    *    description: trae todos los pedidos generados
    *    responses:
    *      '200':
    *          description: A Succesful response 
    */
   app.get("/lala", (req, res) => {
       res.status(200).send("Customer results de users");
     });
},

 getUsersById = (app) => {
  
  console.log("enter a user routes");
  /**
  * @swagger
  * sdsdsd:
  *  get:
  *    description: trae todos los pedidos generados
  *    responses:
  *      '200':
  *          description: A Succesful response 
  */
 app.get("/sdsdsd", (req, res) => {
     res.status(200).send("Customer results de users");
   });
}


}



