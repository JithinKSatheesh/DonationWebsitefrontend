import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'

import Home from './home/home'
import Profile from './user/Profile'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/'  exact component={Home} />
                <Route path='/profile' exact  component={Profile} />
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
