import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'

import Loading from '../loader/Loading'
import Error from '../error/Error'

import * as TareasActions from '../../actions/tareasActions'

class Guardar extends Component {

    componentDidMount() {
        const {
            match: { params: { usu_id, tar_id } },
            tareas,
            CambioUserId,
            CambioTitulo
        } = this.props

        if (usu_id && tar_id) {
            const tarea = tareas[usu_id][tar_id]
            CambioUserId(tarea.userId)
            CambioTitulo(tarea.title)
        }
    }

    CambioUserId = (e) => {
        this.props.CambioUserId(e.currentTarget.value)
    }

    CambioTitulo = (e) => {
        this.props.CambioTitulo(e.currentTarget.value)
    }

    Guardar = (e) => {
        const { 
            usuario_id, 
            titulo, 
            Agregar,
            tareas,
            Editar,
            match: { params: { usu_id, tar_id } }, } = this.props

        const nueva_tarea = {
            user_id: usuario_id,
            title: titulo,
            complete: false
        }

        if (usu_id && tar_id) {
            const tarea = tareas[usu_id][tar_id]
            const tareaEditada = {
                ...nueva_tarea,
                completed: tarea.completed,
                id: tarea.id
            }

            Editar(tareaEditada)
        } else {
            Agregar(nueva_tarea)
        }
    }

    Desabilitar = () => {
      const { usuario_id, titulo, loading } = this.props

      if (loading) return true
      if (!usuario_id || !titulo) return true

      return false
    }

    MostrarFunction = () => {
      const { error, loading } = this.props

      if (loading) return <Loading />
      if (error) return <Error message={ error } />
    }

    render() {
        return (
            <div>

                { this.props.regresar ? <Redirect to='/tareas' /> : '' }
            
                <h1> Guardar tareas </h1>
                <div>
                    <label htmlFor=""> Usuario id </label>
                    <input type="number" name="" id="" value={ this.props.usuario_id } onChange={ this.CambioUserId } />
                </div>
                <br/><br/>
                <div>
                    <label htmlFor=""> Titulo </label>
                    <input type="text" name="" id="" value={ this.props.titulo }  onChange={ this.CambioTitulo }/>
                </div>
                <br/><br/>
                <button onClick={ this.Guardar } disabled={ this.Desabilitar() }> Guardar </button>
                { this.MostrarFunction() }
            </div>
        )
    }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer

export default connect(mapStateToProps, TareasActions)(Guardar)