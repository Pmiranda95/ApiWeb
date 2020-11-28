const { Model, DataTypes } = require('sequelize');
const sequelize = require("../db");

class Item extends Model {}
Item.init({
  cantidad: DataTypes.INTEGER,  
  
}, { sequelize, modelName: 'Item',timestamps:false });

module.exports= Item;