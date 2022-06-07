const sequelize = require("sequelize");
const connection = new sequelize('netflix2', 'root', '1234',{
    host: "localhost",
    dialect: "mysql"
});

module.exports = connection