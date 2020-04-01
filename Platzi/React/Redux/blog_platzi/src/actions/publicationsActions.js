import axios from 'axios'
import { GET_FOR_USER, LOADING, ERROR, COM_LOADING, COM_ERROR, COM_UPDATE } from '../types/publicationsTypes'
import * as usersTypes from '../types/usersTypes'

const { GET_ALL: GET_ALL_USERS } = usersTypes 

export const getForUser = (key) => async (dispatch, getState) => {
    dispatch({
        type: LOADING
    })

    try {
        const { usuarios } = getState().usersReducer
        const { publicaciones } = getState().publicationsReducer
        const user_id = usuarios[key].id
        const fetch = await axios.get(`https://jsonplaceholder.typicode.com/posts?userId=${user_id}`)

        const newFetch = fetch.data.map((publications) => ({
            ...publications,
            commentary: [],
            open: false
        }))

        const publications_update = [
            ...publicaciones,
            newFetch
        ]

        dispatch({
            type: GET_FOR_USER,
            payload: publications_update
        })

        const users_update = [
            ...usuarios
        ]

        const publications_key = publications_update.length - 1
        users_update[key] = {
            ...usuarios[key],
            publications_key
        }

        dispatch({
            type: GET_ALL_USERS,
            payload: users_update
        })
    } catch (error) {
        dispatch({
            type: ERROR,
            payload: 'Publicaciones no disponibles'  
        })
    }
}

export const openClose = (pub_key, com_key) => (dispatch, getState) => {
    const { publicaciones } = getState().publicationsReducer
    const selected = publicaciones[pub_key][com_key]
    
    const update = {
        ...selected,
        open: !selected.open
    }

    const publicationUpdate = [ ...publicaciones ]
    publicationUpdate[pub_key] = [
        ...publicaciones[pub_key]
    ]
    publicationUpdate[pub_key][com_key] = update
    
    dispatch({
        type: GET_FOR_USER,
        payload: publicationUpdate
    })

}

export const getCommentary = (pub_key, com_key) => async (dispatch, getState) => {
    const { publicaciones } = getState().publicationsReducer
    const selected = publicaciones[pub_key][com_key]

    dispatch({
        type: COM_LOADING
    })

    try {
        const fetch = await axios.get(`https://jsonplaceholder.typicode.com/comments?postId=${ selected.id }`)

        const update = {
            ...selected,
            commentary: fetch.data
        }

        const publicationUpdate = [ ...publicaciones ]
        publicationUpdate[pub_key] = [
            ...publicaciones[pub_key]
        ]
        publicationUpdate[pub_key][com_key] = update

        dispatch({
            type: COM_UPDATE,
            payload: publicationUpdate
        })

    } catch (error) {
        dispatch({
            type: COM_ERROR,
            payload: 'Comentarios no disponibles'  
        })
    }
}