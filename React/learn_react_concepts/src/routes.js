//Dependencies
import React from "react";
import { Route, Switch } from "react-router-dom";


//Components
import App from './Components/App';
import About from './Components/about';
import Contact from './Components/contact';
import Home from './Components/home';
import Page404 from './Components/page404';

const AppRoutes = () =>
    <App>
        <Switch>
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route exact path="/" component={Home} />
            <Route component={Page404} />
        </Switch>
    </App>
;export default AppRoutes;