const Producto = require("../database/models/Producto");


exports.createProducto = (req, res) => {
    const {filename} = req.file;
    
    Producto.create({
        nombre:req.body.nombre,
        descripcion:req.body.descripcion,
        precio:req.body.precio,
        imagenProducto:"http://localhost:3000/"+"public/"+filename
    }).then(producto =>{
        res.json(producto);
    }).catch(e=>{
        res.json(e);
    })
}

exports.editProducto = async (req,res) => {
    const producto = await Producto.findByPk(req.params.idProducto);
    
    if (producto === null) {
        return res.status(400).json({ status: 400, message: "El producto no existe" });      
    } 

    producto.update(req.body);
    return  res.status(200).json({ status: 200, message: "Producto editado" });
}

exports.getPruductos =  (req, res) =>{
    Producto.findAll().then(productos => {
       res.json(productos);
   });
}

exports.deleteProducto = async (req,res) => {
    let producto = await Producto.findByPk(req.params.idProducto);
    if(producto === null){
        return res.status(400).json({ status: 400, message: "El producto no existe" });      
    }

    Producto.destroy({
        where:{id:req.params.idProducto}
    }).then(()=>{
        return res.status(200).json({ status: 200, message: "Producto eliminado" });      
    })
}

exports.getProductoById = (req,res) => {
    const producto = Producto.findByPk(15);

    if (producto === null) {
        return res.status(400).json({ status: 400, message: "El producto no existe" });      
    } 

    return res.status(200).json({ status: 200, data: producto });
}
