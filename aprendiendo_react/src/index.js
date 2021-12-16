import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import Usuario from './componentes/Usuario';
import FormularioInicioSesion from './componentes/FormularioInicioSesion';
// import ContadorClass from './componentes/ContadorClass' 
// import ContadorFuncional from './componentes/ContadorFuncional';
import './index.css';
import Boton from './componentes/elementos/Boton';
import EjemploReducer from './componentes/EjemploUseReducer';
import Blog from './componentes/Blog';


const App = () => {

  // const sesion = true;
  // const cerrarSesion = () =>{alert("Hola!!!!!!!!!")}


  //vamos a trabajar con estados.

  
    const [sesion, cambiarEstadoSesion] = useState(true);
  

  return (
    //etiqueras vacias significan fragmento equivalente a una etiqueta div
    <div className="contenedor">   
    {sesion === true ? //signo de pregunta significa entonces
    <div>
      <Usuario/> 
      <Blog/>
      <EjemploReducer/>
       {/* <ContadorFuncional cantidadIncrementar={10} cantidadDisminuir={5}/>  */}
      {/* primera forma para ejecutar un boton, con la constante cerrarSesion que se encuentra arriba */}
      {/* <button onClick={cerrarSesion}>Cerrar Sesion</button> */}

       {/*segunda forma de ejecutar un boton  */}
      {/* <button onClick={() => {
        alert('Cerramos Sesion')
      }}>Cerrar Sesion</button> */}

      {/* Tercera forma dinamica con useState para cambiar estado de botom */}
      {/* <button onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</button> */}
      <Boton largo marginTop onClick={() => cambiarEstadoSesion(false)}>Cerrar Sesion</Boton>
    </div> 
    : //significa sino (else)
    <div>
          
          <FormularioInicioSesion  cambiarEstadoSesion ={cambiarEstadoSesion}/>
          {/*
          <button onClick = {() => cambiarEstadoSesion(true)}>Iniciar Sesion</button>
          */}
    </div>  
    }
    
  </div>
  );
};

ReactDOM.render(<App/>,document.getElementById('root'));

// const JSX = (
//   <div>
//     {sesion === true ? //signo de pregunta significa entonces
//     <>
//     <Usuario/> 
//     <Usuario/> 
//     <Usuario/> 
//     <Usuario/> 
//     <Usuario/> 
//     </>
//     : //significa sino (else)
    
//     <p>No Has Iniciado Sesion</p>}
    
//   </div>
// );




// const vedificarSesion = (sesion) =>{
//   if (sesion === true){
//     return JSX;
//   }else{
//     return <h1>NO has iniciado sesion</h1>
//   }
// }

// ReactDOM.render(vedificarSesion(sesion),document.getElementById('root'));



