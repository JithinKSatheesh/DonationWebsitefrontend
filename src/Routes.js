import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import PrivateRoute from './Auth/PrivateRoute'

import Home from './home/home'
import ProfileDonate from './user/ProfileDonate'
import ProfileRequest from './user/ProfileRequest'
import Login from "./user/Login"
import ViewHelp from './GridVolunteer/ViewHelp'
import ViewDonations from "./GridDoner/ViewDonations";
import Announcements from './Commnunity/Announcements'
// import Upload from './user/FileUpload'


const Routes = ()=>{
    return(
        <BrowserRouter>
            <Switch>
                {/* <PrivateRoute path='/profile' exact  component={Profile} /> */}
                <Route path='/profile-donate' exact  component={ProfileDonate} />
                <Route path='/profile-request' exact  component={ProfileRequest} />
                <Route path='/login' exact  component={Login} />
                <Route path='/help-request' exact  component={ViewHelp} />
                <Route path='/donation-request' exact  component={ViewDonations} />
                <Route path='/community' exact  component={Announcements} />
                <Route path='/'   component={Home} />

                {/* <Route path='/upload' exact  component={Upload} /> */}
                
            </Switch>
        </BrowserRouter>
    )
}

export default Routes
