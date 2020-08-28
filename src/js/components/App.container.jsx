import React, {useState, useCallback} from "react";
import PropTypes from "prop-types"
import App from "./App.js"
import {LanguageContext} from './Contexts/LanguageContext.js';
import {useAuth} from "../customHooks/auth.hook.js";
import {LoginContext} from "./Contexts/LoginContext.js";


function AppContainer(props) {

  const {token, userId, login, logout} = useAuth()
  const isAuthenticated = !!token;

  let [language, setLanguage] = useState("en");


  const toggleLanguageFunc = useCallback(
      () => language === "en" ? setLanguage("ru") : setLanguage("en"),
      [language],
  );

  let langContext = {
    language: language,
    toggleLanguage: toggleLanguageFunc
  };

  return (<LanguageContext.Provider value={langContext}>
    <LoginContext.Provider value ={{token, userId, login, logout, isAuthenticated}}>
      <App
          getConcerts={props.getConcerts}/>
    </LoginContext.Provider>
  </LanguageContext.Provider>)

}

AppContainer.propTypes = {
  getConcerts: PropTypes.func,
}

export default AppContainer;


