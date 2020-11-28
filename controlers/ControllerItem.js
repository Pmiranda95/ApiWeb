const Item = require("../database/models/Item");
const Producto = require("../database/models/Producto");


exports.createItem = (req, res) => {
    Item.create({
        cantidad:req.body.cantidad,
        PedidoId:req.body.PedidoId,
        ProductoId:req.body.ProductoId,
    }).then(item =>{
        res.json(item);
    }).catch(e=>{
        res.json(e);
    })
}


exports.getItems =  (req, res) =>{
    Item.findAll({
        include:{
            model:Producto,
        }
    }).then(items => {
       res.json(items);
   });
}