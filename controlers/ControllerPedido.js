const Pedido = require("../database/models/Pedido");
const Cliente = require("../database/models/Cliente");


exports.getPedidos =  (req, res) =>{
    Pedido.findAll({
        include:{
            model:Cliente,
        }
    }).then(pedidos => {
       res.json(pedidos);
   });
}

exports.createPedido = (req, res, next) => {
    
}