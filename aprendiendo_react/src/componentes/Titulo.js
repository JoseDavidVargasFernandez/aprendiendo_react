import React from 'react';

// const TituloVerde = ({usuario}) => {
//     const color = 'green'
//     return ( <h1 className="titulo" style={{color: color}}>Hola {usuario}</h1>  );
// }

// const TituloAzul = (props) => {
//     const nombre = props.usuario;
//     const color = 'blue'
//     return ( <h1 className="titulo" style={{color: color}}>Hola {nombre}</h1>  );
// }
 
//metodo para exporta solo un componente
//export default Titulo; 

//Metodo para exportar varios componentes
//export {TituloAzul, TituloVerde}


//Nuevas formar de mejorar la sintaxis

const Titulo = ({usuario, color}) => {
    
    return ( <h1 className="titulo" style={{color: color}}>Hola {usuario}</h1>  );
}

export {Titulo}