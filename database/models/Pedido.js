const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");
//const producto = require("./Producto");

class Pedido extends Model {}
Pedido.init({
  cantidad: DataTypes.FLOAT,
  total: DataTypes.FLOAT
}, { sequelize, modelName: 'Pedido' ,timestamps:false });

//Pedido.belongsToMany(producto,{ through: 'ActorMovies' });

module.exports= Pedido;