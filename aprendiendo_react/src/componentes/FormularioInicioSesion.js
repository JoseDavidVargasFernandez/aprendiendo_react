import React, {useState} from "react";
import styles from './FormularioInicioSesion.module.css'
import Boton from "./elementos/Boton";

const FormularioInicioSesion = (props) => {

    const [usuario, cambiarUSuario] = useState('');
    const [password, cambiarPassword] = useState('');

    // const onChangeUsuario = (e) => {
    //     cambiarUSuario(e.target.value);
    // }
    // const onChangePassword = (e) => {
    //     cambiarPassword(e.target.value);
    // }
     
   
    //funcion para optimizar ejercicio de usuario y contraseña

    const onChange = (e) =>{
        if(e.target.name === 'usuario'){
            cambiarUSuario(e.target.value);
        }else if (e.target.name === 'password') {
            cambiarPassword(e.target.value);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (usuario === 'jose' && password === '456') {
            props.cambiarEstadoSesion(true);
        } else {
            alert('Datos incorrectos')

            //Reiniciar valores
            cambiarUSuario('');
            cambiarPassword('')
        }
        
    }

    return ( 
        <form action="" className={styles.formulario} onSubmit={onSubmit }>
            {/* <p>Usuario: {usuario} </p>
            <p>Contraseña: {password}</p> */}
                <h1>No Has Iniciado Sesion</h1>
            <div>
                <label htmlFor="usuario" className={styles.label}>Usuario</label>
                <input className={styles.input}
                    type="text" 
                    name="usuario" 
                    id="usuario"
                    value={usuario}  

                    // onChange= {onChangeUsuario} 

                    onChange={onChange}
                />
            </div>
            <div>
                <label htmlFor="password" className={styles.label}>Contraseña</label>
                <input className={styles.input}
                type="password" 
                name="password" 
                id="password"
                value={password}

                // onChange = {(e) => {
                //     cambiarPassword(e.target.value)
                // }}

                // onChange={onChangePassword}

                onChange={onChange}

                />
            </div>
            {/* <button type="submit" className={styles.boton}>Iniciar Sesion</button> */}
            <div>
            <Boton largo type="submit" >Iniciar Sesion</Boton>
            </div>
        </form>
     );
}
 
export default FormularioInicioSesion ;
