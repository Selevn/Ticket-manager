import React, {useState, useEffect} from "react";

import App from "./App.js"

import {LanguageContext} from './Contexts/LanguageContext.js';

function AppContainer(props) {
  let [language, setLanguage] = useState("en");

  function toggleLanguageFunc() {
    /*useEffect(() => {
      language === "en" ? setLanguage("ru") : setLanguage("en")
    })*/
    language === "en" ? setLanguage("ru") : setLanguage("en")
  }

  let langContext = {
    language: language,
    toggleLanguage: toggleLanguageFunc
  };

  return (<LanguageContext.Provider value={langContext}>
    <App
        getConcerts={props.getConcerts}/>
  </LanguageContext.Provider>)

}


export default AppContainer;


