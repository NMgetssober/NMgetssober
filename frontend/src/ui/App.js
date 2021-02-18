import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {NavBar} from './NavBar'
import { Footer } from './Footer'
import {Navbar} from "react-bootstrap";
import {AboutUs} from "./AboutUs";


export const App = () => (
    <>
        <BrowserRouter>
            <Navbar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/AboutUs' component={AboutUs} />
                <Route exact path='/navbar' component={NavBar}></Route>
                <Route exact path='/footer' component={Footer}/>
                <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>

    </>
)