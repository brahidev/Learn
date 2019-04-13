// Dependencies
import React from 'react'
import { Route, Switch } from 'react-router-dom'

// Components
import App from '../App'
import Home from '../Components/Home'
import About from '../Components/About'
import Contact from '../Components/Contact'
import Page404 from '../Components/Page404'

const Routes = () => (
    <App>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/contact" component={Contact}/>
            <Route exact path="/about" component={About}/>
            <Route component={Page404}/>
        </Switch>
    </App>
);

export default Routes