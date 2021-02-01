const Imagen = require("../database/models/Imagen");

exports.createImagen = (req, res) => {
    const {filename} = req.file;
    Imagen.create({
        urlImagen:"http://localhost:3000/"+"public/"+filename,
        ProductoId:req.body.ProductoId,
    }).then(imagen =>{
        res.json(imagen);
    }).catch(e=>{
        res.json(e);
    })
}

