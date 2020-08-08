import PropTypes from 'prop-types';
import React from "react";
import {Switch, Route} from 'react-router-dom';

import {LanguageContext} from './Contexts/LanguageContext.js';
import Main from "./Main/Main.jsx";
import Admin from "./Admin/Admin.jsx";
import Login from "./Login/Login.jsx";

function App(props) {
  {

    return (<div>
      <LanguageContext.Provider value = {{language:"ru"}}>
        <Switch>
          <Route path='/admin' component={Admin}/>
          <Route path='/login' component={Login}/>
          <Route path='/' component={() => <Main getConcerts={props.getConcerts}/>}/>
        </Switch>
      </LanguageContext.Provider>
    </div>)
  }
}

App.propTypes = {
  getConcerts: PropTypes.func
}

export default App;


