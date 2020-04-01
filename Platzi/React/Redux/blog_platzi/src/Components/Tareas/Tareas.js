import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Loading from '../loader/Loading'
import Error from '../error/Error'

import * as tareasActions from '../../actions/tareasActions'

class Tareas extends Component {

    componentDidMount() {
        if (!Object.keys(this.props.tareas).length) this.props.getAllTareas()
    }

    mostrarContenido = () => {
      const { tareas, loading, error } = this.props

        if (loading) return <Loading />
        if (error) return <Error message={ error } />

        return Object.keys(tareas).map((usu_id) => (
            <div key={ usu_id }>
                <h2> Usuario: { usu_id } </h2>
                <div className="contenedor_tareas">
                    { this.ponerTareas(usu_id) }
                </div>
            </div>
        ));

    }

    ponerTareas = (usu_id) => {
      const { tareas } = this.props
      const por_usuario = {
          ...tareas[usu_id]
      }      

      return Object.keys(por_usuario).map((tar_id) => (
        <div key={ tar_id }>
            <input type="checkbox" defaultChecked={ por_usuario[tar_id].completed } name="" id=""/>
            { 
                por_usuario[tar_id].title
            }
            <button className="m_left"> <Link to={ `/tareas/guardar/${usu_id}/${tar_id}` }> Editar </Link></button>
            <button className="m_left"> Eliminar </button>
        </div>
      ))
    }

    render () { 
        return (
            <div>
                <button>
                    <Link to="/tareas/guardar">
                        Guardar
                    </Link>
                </button>
                { this.mostrarContenido() }
            </div>
        )
    }
}

const mapStateToProps = ({ tareasReducer }) => tareasReducer

export default connect(mapStateToProps, tareasActions)(Tareas)