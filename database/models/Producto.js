const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");
const Pedido =  require("./Pedido");

class Producto extends Model {}
Producto.init({
  nombre: DataTypes.STRING,
  descripcion: DataTypes.STRING,
  precio: DataTypes.FLOAT,
  imagenProducto: DataTypes.BLOB
}, { sequelize, modelName: 'Producto',timestamps:false });

Producto.belongsToMany(Pedido,{ through: 'ActorMovies' });
Pedido.belongsToMany(Producto,{ through: 'ActorMovies' });
module.exports= Producto;