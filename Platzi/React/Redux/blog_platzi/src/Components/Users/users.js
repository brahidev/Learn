import React, { Component } from 'react';
import { connect } from 'react-redux'

import * as usersActions from '../../actions/usersActions'

import Tabla from '../Tabla'
import Loading from '../loader/Loading'
import Error from '../error/Error'

class users extends Component {

  componentDidMount() {
    if (!this.props.usuarios.length) {
      this.props.getAll()
    }
  }

  render() {
    if (this.props.loading) {
      return <Loading />
    }

    if (this.props.error) {
      return <Error message={ this.props.error }/>
    }

    return (
       <Tabla />
    )
  }
}

const mapStateToProps = (reducers) => {
  return reducers.usersReducer
}

export default connect(mapStateToProps, usersActions)(users);
