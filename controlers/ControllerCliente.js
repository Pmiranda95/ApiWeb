const Cliente = require("../database/models/Cliente");
const Direccion = require("../database/models/Direccion");

exports.createCliente = (req, res) => {    
    Direccion.create({
        calle:req.body.calle,
        altura:req.body.altura,
        entreCalle1:req.body.entreCalle1,
        entreCalle2:req.body.entreCalle2
    }).then(direccion =>{
        Cliente.create({
            DireccionId:direccion.dataValues.id,
            nombreCompleto:req.body.nombreCompleto,
        }).then(cliente =>{
            return res.status(200).json({ status: 200, menssage: "Cliente y direccion dados de alta",data:cliente })
        }).catch(e=>{
            res.json(e);
        })
    }).catch(e=>{
        res.json(e);
    })
    
}
