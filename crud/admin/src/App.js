import './App.css';
import { useState } from "react"
import Axios from "axios";


function App() {

  const [nombre, setNombre] = useState("");
  const [genero1, setGenero1] = useState("");
  const [genero2, setGenero2] = useState("");
  const [pais, setPais] = useState("");
  const [correo, setCorreo] = useState("");
  const [numero, setNumero] = useState(0);

  const add = ()=>{
    Axios.post("http://localhost:3001/create", {
      nombre: nombre,
      genero1: genero1,
      genero2: genero2,
      pais: pais,
      correo: correo,
      numero: numero
    }).then(()=>{
      alert("Registro Ok")
    })
  }

  return (
    <div className="App">
      <div className="datos">
        <label>Nombre Banda<input onChange={(event)=>{
          setNombre(event.target.value);
        }} type="text"></input></label>
        <label>Genero 1<input onChange={(event)=>{
          setGenero1(event.target.value);
        }} type="text"></input></label>
        <label>Genero 2<input onChange={(event)=>{
          setGenero2(event.target.value);
        }} type="text"></input></label>
        <label>Pais<input onChange={(event)=>{
          setPais(event.target.value);
        }} type="text"></input></label>
        <label>Correo<input onChange={(event)=>{
          setCorreo(event.target.value);
        }} type="email"></input></label>
        <label>Numero Contacto<input onChange={(event)=>{
          setNumero(event.target.value);
        }} type="number"></input></label>
        <button onClick={add}>Registrar</button>
      </div>
    </div>
  );
}

export default App;
