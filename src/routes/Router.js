import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import Signup from '../screens/Signup/Signup'
import Login from '../screens/Login/Login'
import Error from '../screens/Error/Error'

const Router = () => {
    return (
        <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Error/>
        </Switch>
    )
}

export default Router;