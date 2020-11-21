const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");
const Cliente =  require("../models/Cliente");

class Direccion extends Model {}
Direccion.init({
  calle: DataTypes.STRING,
  altura: DataTypes.INTEGER,
  entreCalle1: DataTypes.STRING,
  entreCalle2: DataTypes.STRING
}, { sequelize, modelName: 'Direccion',timestamps:false  });

Direccion.hasOne(Cliente);
Cliente.belongsTo(Direccion);
module.exports= Direccion;