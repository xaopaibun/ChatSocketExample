import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Forgot from "../views/forgot";
import SignIn from "../views/signin";
import SignUp from "../views/signup";

export default function RouterApp() {
    return (
        <Router>
            <Switch>
                <Route path="/forgot">
                    <Forgot/>
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/signin">
                    <SignIn />
                </Route>
                <Route path="/">
                    <SignIn />
                </Route>
            </Switch>
        </Router>
    );
}