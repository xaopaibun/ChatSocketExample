import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Chat from "../views/chat";
import Forgot from "../views/forgot";
import SignIn from "../views/signin";
import SignUp from "../views/signup";
import Product from '../views/product/index';

export default function RouterApp() {
   
    return (
        <Router>
            <Switch>
            
            <Route path="/product">
                    <Product/>
                </Route>
                <Route path="/forgot">
                    <Forgot/>
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/chat">
                    <Chat />
                </Route>
                <Route path="/">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    );
}