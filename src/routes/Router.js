import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import Signup from '../screens/Signup/Signup'
import Login from '../screens/Login/Login'
import Error from '../screens/Error/Error'
import Music from '../screens/Music/Music';

const Router = () => {
    return (
        <Switch>
            <Route exact path="/signup" component={Signup}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path={"/", "/music" } component={Music}/>
            <Error/>
        </Switch>
    )
}

export default Router;