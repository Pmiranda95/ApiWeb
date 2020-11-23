const Pedido = require("../database/models/Pedido");
const Cliente = require("../database/models/Cliente");
exports.getUsers =  (req, res) =>{
    Pedido.findAll({
        include:{
            model:Cliente,
        }
    }).then(pedidos => {
       res.json(pedidos);
   });
   // console.log("All users:", JSON.stringify(pedidos));

    //res.status(200).send("Customer safdsa"+JSON.stringify(pedidos, null, 2));

    /*try {
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: e.message });
    }*/
}

exports.createUser = (req, res, next) => {
    // Validate request parameters, queries using express-validator
    
    try {
        return res.status(200).json({ status: 200, data: users, message: "Succesfully Users Retrieved" });
    } catch (e) {
        return res.status(400).json({ status: 400, message: "getUserById" });
    }
}