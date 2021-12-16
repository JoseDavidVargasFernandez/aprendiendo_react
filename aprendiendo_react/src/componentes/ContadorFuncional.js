import React, {useState, useEffect} from "react";
// import style from './ContadorFuncional.module.css';
import Boton from "./elementos/Boton";

const ContadorFuncional = (props) => {

    //agregar estado
    const [cuenta, cambiarCuenta] = useState(0);

//USO DEL Hook De useEffect
//Este hook se ejecuta cada ciclo de rederizado
// useEffect(() => {console.log('El componente se renderizo');});


//Componente DidMount
//Se ejecuta solamente al primer rederizado.
//Esto se logra agregando un arreglo vacio al final.
// useEffect(() => {
//     console.log('El componente cargo por primera vez');
// }, [])


//Se ejecuta cuando cambia el estado de la 
//dependencia que la pasemos, en este caso contador
// useEffect(() => {
//     console.log('El estado del contador cambio');
// }, [cuenta])



useEffect(() => {
    return (() => {
        console.log('Adios Componente');
    })
}, [])



    const incrementar =(cantidad) => {cambiarCuenta(cuenta + cantidad)}
    const disminuir =(cantidad) => {cambiarCuenta(cuenta - cantidad)}



    return ( 
        <div>
            <h1>Contador: {cuenta } </h1>
            {/* <button className={style.boton} onClick={() => {incrementar(props.cantidadIncrementar)}}>Incrementar</button> */}
            {/* <button className={style.boton} onClick={() => {disminuir(props.cantidadDisminuir )}}>Disminuir</button> */}
            <Boton  negro marginRight  onClick={() => {incrementar(props.cantidadIncrementar)}}>Incrementar</Boton>
            <Boton  negro  onClick={() => {disminuir(props.cantidadDisminuir )}}>Disminuir</Boton>
        </div>
     );
}
 
export default ContadorFuncional;