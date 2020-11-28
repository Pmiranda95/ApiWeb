const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");
const Item = require("./Item");

class Pedido extends Model {}
Pedido.init({
  cantidad: DataTypes.FLOAT,
  total: DataTypes.FLOAT,
  estado: DataTypes.STRING
}, { sequelize, modelName: 'Pedido' ,timestamps:false });

Pedido.hasMany(Item);
Item.belongsTo(Pedido);

module.exports= Pedido;