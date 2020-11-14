const {Sequelize} = require('sequelize');
const {config} =  require('../configuracion');

const sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    {host:config.host,dialect:"mysql"}
);  


module.exports = sequelize;