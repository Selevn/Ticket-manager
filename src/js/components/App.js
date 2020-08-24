import PropTypes from 'prop-types';
import React from "react";
import {Switch, Route} from 'react-router-dom';

import Main from "./Main/Main.jsx";
import AdminLogin from "./Admin/AdminLogin.jsx";
import LoginContainer from "./Login/Login.container.jsx";


const App = props => (<div>
  <Switch>
    <Route path='/admin' component={AdminLogin}/>
    <Route path='/login' component={LoginContainer}/>
    <Route path='/' component={() => <Main getConcerts={props.getConcerts}/>}/>
  </Switch>
</div>)

App.propTypes = {
  getConcerts: PropTypes.func
}

export default App;


