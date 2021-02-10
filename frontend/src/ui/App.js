import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import { NavBar } from './NavBar'
import { Footer } from './Footer'

export const App = () => (
    <>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/navbar' component={NavBar}/>
                <Route exact path='/footer' component={Footer}/>
                <Route component={FourOhFour} />
            </Switch>
        </BrowserRouter>

    </>
)