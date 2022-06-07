const sequelize = require("sequelize");
const connection = new sequelize("sqlite::memory:");
module.exports = connection