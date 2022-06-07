const express = require("express");
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const connection = require("./database/connection");
const Usuarios = require("./database/Usuarios");

connection.
        authenticate()
        .then(()=>{
            console.log("Database connected")
        })
        .catch((error) => {
            console.log(error)
        });

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.post("/login", async (req,res) => {
    var email = req.body.email;
    var password = req.body.password;
    var user = await Usuarios.findOne({where: {email: email, password: password},raw: true})
    if(user != null){
        res.send({status: true})
    }else{
        res.send({status: false})
    }
});

app.post("/cadastrar", async (req,res) => {
    var email = req.body.email;
    var nome = req.body.nome;
    var password = req.body.password;
    await Usuarios.create({
        email: email,
        nome: nome,
        password: password
    });
    res.send({status:true});
});

app.get("/", (req,res) => {
    res.send("Yes sir")
});

app.listen(process.env.PORT || port,(req, res) => {
    console.log("Server started")
});