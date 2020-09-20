import { faAcquisitionsIncorporated } from '@fortawesome/free-brands-svg-icons';
import {
    REGISTRO_EXITOSO,
    REGISTRO_ERROR,
    OBTENER_USUARIO,
    LOGIN_EXITOSO,
    LOGIN_ERROR
} from '../../tiposauten';

export default (state, action) =>{
    switch(action.tipo){
        case REGISTRO_EXITOSO:
            localStorage.setItem('token', action.payload.token);

            return{
                ...state,
                autenticado:true
            
            }

        case REGISTRO_ERROR:
            return{
                ...state,
                token:null
            }
        default:
            return;
    }
}