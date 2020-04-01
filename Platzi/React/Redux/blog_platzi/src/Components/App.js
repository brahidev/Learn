import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'

import './styles/styles.css'

import Menu from './Menu'
import Home from './Users/users'
import Publicaciones from './Publicaciones'
import Tareas from './Tareas/Tareas'
import Guardar from './Tareas/Guardar'

const App = () => (
  <BrowserRouter>
    <Menu>
      <div className="margen">
        <Switch>
          <Route exact path='/' component={ Home }  />
          <Route exact path='/tareas' component={ Tareas } />
          <Route exact path='/publicaciones/:key' component={ Publicaciones } />
          <Route exact path='/tareas/guardar/:usu_id/:tar_id' component={ Guardar } />
        </Switch>
      </div>
    </Menu>
  </BrowserRouter>
)

export default App