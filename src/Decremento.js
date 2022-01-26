// Declarar y exportar un componente funcional llamado Decremento
// El componente Decremento debe tener un estado llamado "Decremento" con un valor inicial de 100
// El componente debe mostrar un botón con el texto "Decrementar" y al precionar el boton se debe reducir el estado Decremento en 1.
// El componente debe mostrar un parrafo con el valor actual del estado del decremento.
import React from 'react';
import {useState} from 'react';

export default function Decremento() {
  const [Decremento, setDecremento] = useState(100);

  function decrementar(){
    const nuevoDecremento = Decremento  - 1;
    setDecremento(nuevoDecremento)
   }

  return (
    <div className="decremento">
    <button onClick={decrementar}>Decrementar!</button>
    <p>Valor actual del estado del decremento: {Decremento} </p>
    </div>
  )
}

