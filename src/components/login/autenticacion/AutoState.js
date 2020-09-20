import React, { useReducer } from "react";
import AutenContex from "./AutenContext";
import AutenReducer from "./AutenReducer";
//importar axios
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR
} from '../../tiposauten';

const AutoState = props => {
    const iniciarState = {

        token: localStorage.getItem('token'),
        autenticado: null
    }

    const [state, envio] = useReducer(AutenReducer, iniciarState);

    //crear las funciones
    const registrarUsuario = async datos =>{
        try{
            const respuesta = await //importar cliente de Axios y pasarle usuario, contraseña (DATOS)

            envio({
                type:REGISTRO_EXITOSO
            })

        }catch(error){
            console.log(error);
            envio({
                type: REGISTRO_ERROR
            })
        }
    }

    return (
        <AutenContex.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario:state.usuario,
                registrarUsuario
            }}
        >{props.children}

        </AutenContex.Provider>
    )
}
export default AutoState;