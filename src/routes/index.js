import React, { Fragment } from 'react'
import {Switch,Route} from "react-router-dom";
import Home from "../Components/Home"
import About from "../Components/About"
import Contact from "../Components/Contact"
import Services from "../Components/Services"

const routes = () => {
    return (
        <Fragment>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route exact path="/about" component={About}/>
                <Route exact path="/contact" component={Contact}/>
                <Route exact path="/services" component={Services}/>
            </Switch>
        </Fragment>
    )
}
export default routes;


