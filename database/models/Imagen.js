const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");
const Producto = require("./Producto");
class Imagen extends Model{}
Imagen.init({
  urlImagen: DataTypes.STRING,  
}, { sequelize, modelName: 'Imagen',timestamps:false });
Producto.hasMany(Imagen);
Imagen.belongsTo(Producto);


module.exports= Imagen;