import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import { MainNav } from './NavBar'
import { Footer } from './Footer'
import { AboutUs } from './AboutUs'

export const App = () => (
    <>
        <BrowserRouter>
            <MainNav/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/navbar' component={NavBar}/>
                <Route exact path='/footer' component={Footer}/>
                <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>

    </>
)