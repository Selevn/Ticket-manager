import React, {useState, useCallback} from "react";
import PropTypes from "prop-types"
import App from "./App.js"

import {LanguageContext} from './Contexts/LanguageContext.js';

function AppContainer(props) {
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
    <App
        getConcerts={props.getConcerts}/>
  </LanguageContext.Provider>)

}

AppContainer.propTypes = {
  getConcerts: PropTypes.func,
}

export default AppContainer;


