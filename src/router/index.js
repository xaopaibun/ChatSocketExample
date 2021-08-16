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
import VerifyOTP from "containers/verifyOTP";
import UpdateUser from "containers/updateUser.js";
import ChatEx from '../containers/chatEx/index';

export default function RouterApp() {

    return (
        <Router>
            <Switch>
                <Route path="/ChatEx">
                    <ChatEx />
                </Route>
                <Route path="/verifyOTP">
                    <VerifyOTP />
                </Route>
                <Route path="/update-user">
                    <UpdateUser />
                </Route>
                <Route path="/authen">
                    <Forgot />
                </Route>
                <Route path="/signup">
                    <SignUp />
                </Route>
                <Route path="/login">
                    <SignIn />
                </Route>
                <Route path="/chat">
                    <Chat />
                </Route>
                <Route path="/">
                    <Forgot />
                </Route>
            </Switch>
        </Router>
    );
}