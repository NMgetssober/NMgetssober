import { BrowserRouter } from 'react-router-dom'
import { Route, Switch } from 'react-router'
import {Home} from './Home'
import {FourOhFour} from './FourOhFour'
import React from 'react'
import {NavBar} from './shared/components/navBar/NavBar'
import {Footer} from './Footer'
import {AboutUs} from "./AboutUs";
import {MapPage} from "./Map";
import {ActivityTypeComponent} from "./ActivityType";
import 'mapbox-gl/dist/mapbox-gl.css'



import {Provider} from "react-redux";


export const App = (store) => (
    <>
        <Provider store={store}>
        <BrowserRouter>
            <NavBar/>
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/AboutUs' component={AboutUs} />
                <Route exact path='/navbar' component={NavBar}/>
                <Route exact path='/footer' component={Footer}/>
                <Route exact path='/map' component={MapPage}/>
                <Route exact path='/activity-type' component={ActivityTypeComponent}/>
                <Route component={FourOhFour} />
            </Switch>
            <Footer/>
        </BrowserRouter>
        </Provider>
    </>
)