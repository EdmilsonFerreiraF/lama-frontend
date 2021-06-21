import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import Signup from '../screens/Signup/Signup'
import Login from '../screens/Login/Login'
import Error from '../screens/Error/Error'
import ManageMusic from '../screens/ManageMusic/ManageMusic';
import CreateMusic from '../screens/CreateMusic/CreateMusic';
import BrowseMusic from '../screens/BrowseMusic/BrowseMusic';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path={"/", "/music"} component={ManageMusic}/>
            <Route exact path={"/music/create"} component={CreateMusic}/>
            <Route exact path={"/music/all"} component={BrowseMusic}/>
            <Error/>
        </Switch>
    )
}

export default Router;