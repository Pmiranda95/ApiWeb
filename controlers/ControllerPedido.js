const Pedido = require("../database/models/Pedido");
const Cliente = require("../database/models/Cliente");

exports.createPedido = (req, res, next) => {
    Pedido.create({
        cantidad:req.body.cantidad,
        total:req.body.descripcion,
        estado:req.body.estado,
        clienteId:req.body.clienteId
    }).then(producto =>{
        res.json(producto);
    }).catch(e=>{
        res.json(e);
    })
}

exports.getPedidos =  (req, res) =>{
    Pedido.findAll({
        include:{
            model:Cliente,
        }
    }).then(pedidos => {
       res.json(pedidos);
   });
}
