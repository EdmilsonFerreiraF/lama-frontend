import React from 'react';
import {  Switch, Route } from 'react-router-dom';
import Signup from '../screens/Signup/Signup'
import Error from '../screens/Error/Error'

const Router = () => {
    return (
            <Switch>
                <Route exact path={'/signup'}>
                    <Signup/>
                </Route>
                <Route>
                    <Error/>
                </Route>        
            </Switch>
    )
}

export default Router;