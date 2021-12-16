import React from 'react';
//import Titulo from './Titulo';//Metodo para exportar solo un metodo
//import { TituloAzul, TituloVerde } from './Titulo';

import { Titulo} from './Titulo';
import styled from 'styled-components';

//crear componente usuarip

const Usuario = () => {
    const pais = "CR";
    const amigos = ['Ale','Manuel','Jose', 'Pepe', 'Miguel', 'Maria'];
    return (
      <div>
        <Titulo usuario="Jose" color="red"/>
        <Titulo usuario="Maria" color="gray"/>
        <Parrafo>que tengas buen dia</Parrafo>
        <p>ESTO ES UNA PRUEBA DE PRACTICA  </p>
        {pais && <p>Tu eres de: {pais}</p>}
        <ul>
          {amigos.map((amigo, index) =>  <li key={index}> {amigo}</li>)}
        </ul>
      </div>
  
    );
  }

const Parrafo = styled.p`
  margin: 20px 0;
  color: green;
`;  



  export default Usuario;
  