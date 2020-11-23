const Producto = require("../database/models/Producto");

exports.getPruductos =  (req, res) =>{
    Producto.findAll().then(productos => {
       res.json(productos);
   });
}

exports.createProducto = (req, res) => {
    Producto.create({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        imagenProducto:null
    }).then(producto =>{
        res.json(producto);
    }).catch(e=>{
        res.json(e);
    })
}