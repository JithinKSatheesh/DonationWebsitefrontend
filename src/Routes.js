import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PrivateRoute from './Auth/PrivateRoute'

import Home from './home/home'
import Profile from './user/Profile'
import Login from "./user/Login"
import Volunteer from './Volunteer/Volunteer'
// import Upload from './user/FileUpload'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                <Route path='/'  exact component={Home} />
                <PrivateRoute path='/profile' exact  component={Profile} />
                <Route path='/login' exact  component={Login} />
                <Route path='/volunteer' exact  component={Volunteer} />

                {/* <Route path='/upload' exact  component={Upload} /> */}
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
