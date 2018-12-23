import React from 'react'
import Header from '../components/Header';
import Login from './Login';
import { Switch, Redirect, Route } from 'react-router-dom';
import Signup from './Signup';

function Register() {
  return (
    <div>
        <Header/>
        <div>
          <Switch>
            <Redirect exact from="/register" to="/register/login"/>
            <Route path="/register/login" component={Login}/>
            <Route path="/register/signup" component={Signup}/>
          </Switch>
        </div>
    </div>
  )
}

export default Register;
