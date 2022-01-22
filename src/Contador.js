
import React, { useState } from 'react';


export default function Contador(){
  const [ contador, setContador ] = useState(0);

  function contar(){
   const nuevoContador = contador  + 1;
   setContador(nuevoContador)
  }
  
  return (
    <div className="contador">
      <button onClick = {contar}>Dame Click!</button>
      <p>Me has presionado {contador} veces</p>
    </div>
  ) 
} 