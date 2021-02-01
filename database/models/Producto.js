const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");
const Item = require('./Item');

class Producto extends Model {}

Producto.init({
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  precio: DataTypes.FLOAT,
}, { sequelize, modelName: 'Producto',timestamps:false });


Producto.hasOne(Item);
Item.belongsTo(Producto);

module.exports= Producto;