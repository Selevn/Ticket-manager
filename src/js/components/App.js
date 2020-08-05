import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter, Switch, Route, Redirect} from 'react-router-dom';
import Main from "./Main/Main.jsx";
import Admin from "./Admin/Admin.jsx";
import Login from "./Login/Login.jsx";

function App(props) {
    return (
            <div>
                <Switch>
                    <Route path='/admin' component={Admin}/>
                    <Route path='/login' component={Login}/>
                    <Route path='/' component={Main}/>
                </Switch>
            </div>

    );
}

export default App;

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<BrowserRouter><App/></BrowserRouter>, wrapper) : false;

