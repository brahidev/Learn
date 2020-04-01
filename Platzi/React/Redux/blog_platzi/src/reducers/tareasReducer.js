import { GET_ALL_TAREAS, LOADING, ERROR, CAMBIO_USUARIO_ID, CAMBIO_TITULO, GUARDAR } from '../types/tareasTypes'

const INIT_STATE = {
    tareas: {},
    loading: false,
    error: false,
    usuario_id: '',
    titulo: '',
    regresar: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ALL_TAREAS:
            return { ...state, 
                tareas: action.payload,
                loading: false,
                error: false,
                regresar: false
            }
        case LOADING:
            return { ...state, loading: true }
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        case CAMBIO_USUARIO_ID:
            return {...state, error: false, loading: false, usuario_id: action.payload}
        case CAMBIO_TITULO:
            return {...state, error: false, loading: false, titulo: action.payload}
        case GUARDAR: 
            return {...state, tareas: {}, loading: false, error: false, regresar: true, usuario_id: '', titulo: '' }
        default: return state
    }
}