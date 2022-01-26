import React from 'react';
import './style.css';
import Contador from './Contador';
import Decremento from './Decremento';
import { useState } from 'react';

export default function App() {
  const [mostrarContador, setMostrarContador] = useState(true);
  // Declarar estado mostrarDecremento
  const [mostrarDecremento, setMostrarDecremento] = useState(true);

  function mostrarOcultarContador() {
    const mostrar = !mostrarContador;
    setMostrarContador(mostrar);
  }
  // Declarar función para mostrar u ocultar decremento
  function mostrarOcultarDecremento() {
    const muestra = !mostrarDecremento;
    setMostrarDecremento(muestra);
  }

  return (
    <div>
      <h1>Ejercicio useState!</h1>
      <button onClick={mostrarOcultarContador}>
        Mostrar / Ocultar Contador
      </button>
      {mostrarContador && <Contador />}
      {/*<Contador />*/}
      {/*<Contador />*/}
      {/*<Contador />*/}
      {/* Colocar botón con el texto "Mostrar / Ocultar Decremento". Al precionar el botón se debe cambiar el estado mostrarDecremento */}
      {/* Mostrar el componente decremento cuando el estado mostrarDecremento sea igual a true */}
      <button onClick={mostrarOcultarDecremento}>
        Mostrar / Ocultar Decremento
      </button>
      {mostrarDecremento && <Decremento />}
    </div>
  );
}
