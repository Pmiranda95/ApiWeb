const Direccion = require("../database/models/Direccion");
exports.createDireccion = (calle, altura, entreCalle1,entreCalle2) => { 
    Direccion.create({
        calle:calle,
        altura:altura,
        entreCalle1:entreCalle1,
        entreCalle2:entreCalle2
    }).then(direccion =>{
        return res.status(200).json({ status: 200, data: direccion })
    }).catch(e=>{
        res.json(e);
    })
}
