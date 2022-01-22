import React from "react";
import "./style.css";
import  Contador  from './Contador';
import {useState} from 'react';

export default function App() {
  const [mostrarContador, setMostrarContador] = useState(true);

  function mostrarOcultarContador(){
    const mostrar = !mostrarContador;
    setMostrarContador(mostrar)
  }

  return (
    <div>
      <h1>Ejercicio useState!</h1>
      <button onClick = {mostrarOcultarContador} >Mostrar Contador</button>
      {mostrarContador && <Contador />}
    </div>
  );
}
