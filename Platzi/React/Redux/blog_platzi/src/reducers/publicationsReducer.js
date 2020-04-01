import { GET_FOR_USER, LOADING, ERROR, COM_LOADING, COM_ERROR, COM_UPDATE } from '../types/publicationsTypes'

const INIT_STATE = {
    publicaciones: [],
    loading: false,
    error: false,
    com_loading: false,
    com_error: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {   
        case GET_FOR_USER:
            return { ...state, 
                publicaciones: action.payload,
                loading: false,
                error: false
            }
        case COM_UPDATE:
            return { ...state, 
                publicaciones: action.payload,
                com_loading: false,
                com_error: false
            }     
        case LOADING:
            return { ...state, loading: true }
        case ERROR:
            return { ...state, error: action.payload, loading: false }
        case COM_LOADING:
            return { ...state, com_loading: true }
        case COM_ERROR:
            return { ...state, com_error: action.payload, com_loading: false }
            
            default: return state
    }
}