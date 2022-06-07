const sequelize = require("sequelize");
const connection = require("./connection");

const Usuarios = connection.define("usuarios",{
    id:{
        type: sequelize.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    },
    nome:{
        type: sequelize.STRING,
        allowNull: false
    },
    email:{
        type: sequelize.STRING,
        allowNull: false,
        unique: true
    },
    password:{
        type: sequelize.STRING,
        allowNull: false,
    }
});

module.exports = Usuarios;