import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    //Redirect
  } from "react-router-dom";

//components
import { NavBar} from './NavBar';
import { AboutScreen } from './AboutScreen';
import { LoginScreen } from './LoginScreen';
import { HomeScreen } from './HomeScreen';
import { NotFoundPage } from './NotFoundPage';


export const RouterApp = () => {
    return (
        <Router>
            <div>
                <NavBar />

                <Switch>
                    <Route exact path="/" component={ HomeScreen } />
                    <Route exact path="/about" component={ AboutScreen } />
                    <Route exact path="/login" component={ LoginScreen } />
                    <Route component={ NotFoundPage } />
                    {/* <Redirect to="/" /> */}
                </Switch>
            </div>
        </Router>
    )
}
