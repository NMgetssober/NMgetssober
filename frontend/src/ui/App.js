import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import { Home } from './Home'
import { FourOhFour } from './FourOhFour'
import React from 'react'
import {NavBar} from './NavBar'
import { Footer } from './Footer'
import {AboutUs} from "./AboutUs";
import {MapPage} from "./Map";

import {Provider} from "react-redux";


export const App = (store) => (
    <>
        {/*<Provider store={store}>*/}
        <BrowserRouter>

            <NavBar/>

            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/AboutUs' component={AboutUs} />
                <Route exact path='/navbar' component={NavBar}/>
                <Route exact path='/footer' component={Footer}/>
                <Route exact path='/map' component={MapPage}/>
                <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>
        {/*</Provider>*/}
    </>
)