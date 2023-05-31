const express = require("express");
const app = express();
const mysql = require("mysql")

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"",
    database:"es_db"
});

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const genero1 = req.body.genero1;
    const genero2 = req.body.genero2;
    const pais = req.body.pais;
    const email = req.body.email;
    const telefono = req.body.telefono;
})

app.listen(3001,()=>{
    console.log("run server")
})