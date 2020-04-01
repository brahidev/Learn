import { GET_ALL, LOADING, ERROR } from '../types/usersTypes'

const INIT_STATE = {
    usuarios: [],
    loading: false,
    error: false
}

export default (state = INIT_STATE, action) => {
    switch (action.type) {
        case GET_ALL:
            return { ...state, 
                usuarios: action.payload,
                loading: false,
                error: false
            }
        case LOADING:
            return { ...state, loading: true }
        case ERROR:
            return { ...state, error: action.payload, loading: false }
            
            default: return state
    }
}