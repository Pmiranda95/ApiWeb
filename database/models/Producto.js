const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");
const Item = require('./Item');
const config = require('../../configuracion');
class Producto extends Model {}
Producto.setImagenProducto = (fileName) => {
  console.log("entre ´+++++++++++");
  this.imagenProducto="http://localhost:3000/"+"public/"+fileName+".png"
  //console.log(this.imagenProducto);
}
Producto.init({
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  precio: DataTypes.FLOAT,
  imagenProducto: DataTypes.STRING
}, { sequelize, modelName: 'Producto',timestamps:false });


Producto.hasOne(Item);
Item.belongsTo(Producto);
module.exports= Producto;