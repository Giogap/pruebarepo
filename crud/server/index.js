const express = require("express");
const app = express();
const mysql = require("mysql");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "8501",
    database: "es_db"
});

app.post("/create", (req, res) => {
    const nombre = req.body.nombre;
    const genero1 = req.body.genero1;
    const genero2 = req.body.genero2;
    const telefono = req.body.telefono;
    const email = req.body.email;
    const pais = req.body.pais;

    db.query('INSERT INTO user(nombre, genero1, genero2, telefono, email, pais) VALUES(?, ?. ?, ?, ?)',[nombre, genero1, genero2, telefono, email, pais]),
    (err, result) => {
        if (err) {
            console.log(err);
        } else {
            res.send("Registro Ok")
        }
    }
});



app.listen(3001, () => {
    console.log("Server Ok");
});
