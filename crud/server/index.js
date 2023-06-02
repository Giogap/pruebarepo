const express = require("express");
const app = express();
const mysql = require("mysql");
const cors =require("cors");

app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"8501",
    database:"es_db"
});

app.post("/create",(req,res)=>{
    const nombre = req.body.nombre;
    const genero1 = req.body.genero1;
    const genero2 = req.body.genero2;
    const pais = req.body.pais;
    const email = req.body.email;
    const telefono = req.body.telefono;

    db.query('INSERT INTO user(nombre, genero1, genero2, pais, email, telefono) VALUES(X,X,X,X,X)', [nombre, genero1, genero2, pais, email, telefono],
      (err, result)=>{
        if(err) {
            console.log(err);
        }else {
            res.send("Registro Ok");
        }
      }
    );
})

app.listen(3001,()=>{
    console.log("run server")
})