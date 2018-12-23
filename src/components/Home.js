import React from 'react'
import { Switch, Route } from 'react-router-dom';

// components
import HomePage from './HomePage';
import Login from '../containers/Login';
import Register from '../containers/Register';
import Signup from '../containers/Signup';


function Home() {
  return (
    <div>
        <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/register" component={Register}/>
        </Switch>
    </div>
  )
}

export default Home

// <Route path="/register" component={Login}/>
