import React, { Component } from 'react'
import { connect } from 'react-redux'

import Loader from '../loader/Loading'
import Error from '../error/Error'
import Commentary from './Commentary'

import * as usersActions from '../../actions/usersActions'
import * as publicationsActions from '../../actions/publicationsActions'

const { getAll: getAllUsers } = usersActions
const { getForUser: getPublicationsForUser, openClose, getCommentary } = publicationsActions

class index extends Component {

    async componentDidMount() {
        const {
            getAllUsers,
            getPublicationsForUser,
            match: { params: { key } }
        } = this.props

        if (!this.props.usersReducer.usuarios.length) {
            await getAllUsers()
        }

        if (this.props.usersReducer.error) return

        if (!('publications_key' in this.props.usersReducer.usuarios[key])) {
            getPublicationsForUser(key)
        }

    }

    showUser = () => {
        const {
            usersReducer,
            match: { params: { key } }
        } = this.props

        if (usersReducer.error) {
            return <Error message={ usersReducer.error } />
        }

        if (!usersReducer.usuarios.length || usersReducer.loading ) {
            return <Loader />
        }

        const name = usersReducer.usuarios[key].name

        return  <h1> Publicaciones de { name }</h1>
    };
    
    showPublications = () => {
        const {
            usersReducer,
            usersReducer: { usuarios },
            publicationsReducer,
            publicationsReducer: { publicaciones },
            match: { params: { key } }
        } = this.props

        if (!usuarios.length) return
        if (usersReducer.error) return

        if (publicationsReducer.loading) {
            return <Loader />
        }

        if (publicationsReducer.error) {
            return <Error message={ publicationsReducer.error } />
        }
        
        if (!('publications_key' in usuarios[key])) return

        const { 
            publications_key
        } = usuarios[key]

        return this.showInfo(
            publicaciones[publications_key],
            publications_key
        )
    }

    showInfo = (publicaciones, pub_key) => (
        publicaciones.map((publication, com_key) => (
            <div 
                className="pub_title"
                key={ publication.id }
                onClick={ () => this.showCommentary(pub_key, com_key, publication.commentary) }>

                <h2> { publication.title } </h2>
                <h3> { publication.body } </h3>
                { publication.open ? <Commentary commentary={ publication.commentary }/> : '' }
            </div>
        ))
    )

    showCommentary = (pub_key, com_key, commentary) => {
        this.props.openClose(pub_key, com_key)
        if(!commentary.length) this.props.getCommentary(pub_key, com_key)
    }

    render() {
        console.log(this.props)
        return (
            <div>
                { this.showUser() }
                { this.showPublications() }
            </div>
        )
    }
}

const mapStateToProps = ({ usersReducer, publicationsReducer }) => {
    return { 
        usersReducer,
        publicationsReducer
    }
}

const mapDispatchToProps = {
    getAllUsers,
    getPublicationsForUser,
    openClose,
    getCommentary
}

export default connect(mapStateToProps, mapDispatchToProps)(index)