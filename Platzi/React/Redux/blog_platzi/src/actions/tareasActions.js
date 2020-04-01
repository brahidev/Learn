import axios from 'axios'
import { GET_ALL_TAREAS, LOADING, ERROR, CAMBIO_USUARIO_ID, CAMBIO_TITULO, GUARDAR } from '../types/tareasTypes'

export const getAllTareas = () => async (dispatch) => {

    dispatch({
        type: LOADING
    })

    try {
        const fetch = await axios.get('https://jsonplaceholder.typicode.com/todos');

        const tareas = {}
        fetch.data.map((tar) => (
            tareas[tar.userId] = {
                ...tareas[tar.userId],
                [tar.id]: {
                    ...tar
                }
            }
        ))

        dispatch({
            type: GET_ALL_TAREAS,
            payload: tareas 
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Información de usuario no disponible'  
        })
    }
}

export const CambioUserId = (value) => (dispatch) => {
    dispatch({
        type: CAMBIO_USUARIO_ID,
        payload: value
    })
}

export const CambioTitulo = (value) => (dispatch) => {
    dispatch({
        type: CAMBIO_TITULO,
        payload: value
    })
}

export const Agregar = (value) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        await axios.post('https://jsonplaceholder.typicode.com/todos', value)
        dispatch({
            type: GUARDAR
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Intente mas tarde'
        })
    }

}

export const Editar = (value) => async (dispatch) => {
    dispatch({
        type: LOADING
    })

    try {
        await axios.put(`https://jsonplaceholder.typicode.com/todos/${value.id}`, value)
        dispatch({
            type: GUARDAR
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Intente mas tarde'
        })
    }
}