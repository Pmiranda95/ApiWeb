const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");
const pedido = require("./Pedido");

class Cliente extends Model {}
Cliente.init({
  nombreCompleto: DataTypes.STRING,
}, { sequelize, modelName: 'cliente',timestamps:false  });

Cliente.hasMany(pedido);
pedido.belongsTo(Cliente);
module.exports= Cliente;