import PropTypes from 'prop-types';
import React from "react";
import {Switch, Route} from 'react-router-dom';

import Main from "./Main/Main.jsx";
import LoginContainer from "./Login/Login.container.jsx";


const Router = props => (<div>
    <Switch>
        <Route path='/login' component={LoginContainer}/>
        <Route path='/' component={() => <Main getConcerts={props.getConcerts}/>}/>
    </Switch>
</div>)

Router.propTypes = {
    getConcerts: PropTypes.func
}

export default Router;


