import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Chat from "../containers/chat";
import Forgot from "../containers/forgot";
import SignIn from "../containers/signin";
import SignUp from "../containers/signup";
import Product from '../containers/product/index';

export default function RouterApp() {
   
    return (
        <Router>
            <Switch>
            
            <Route path="/product">
                    <Product/>
                </Route>
                <Route path="/authen">
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
                    <Forgot/>
                </Route>
            </Switch>
        </Router>
    );
}