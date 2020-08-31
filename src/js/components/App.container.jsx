import React, {useState, useCallback, useEffect} from "react";
import PropTypes from "prop-types"
import App from "./App.js"
import {LanguageContext} from './Contexts/LanguageContext.js';
import {useAuth} from "../customHooks/auth.hook.js";
import {LoginContext} from "./Contexts/LoginContext.js";


function AppContainer(props) {

  const [language, setLanguage] = useState("en");
  const [userId, setUserId] = useState(null);

  const authHook = useAuth()
  console.log("auth hook in Container",authHook)

  /*useEffect(()=>{
    console.log(authHook, "rerender auth hook")
  }, [authHook])*/


  useEffect(() => {
    authHook.userId!==null && setUserId(authHook.userId) && console.log("setted!", authHook.userId)
  },[authHook])


  const toggleLanguageFunc = useCallback(
      () => language === "en" ? setLanguage("ru") : setLanguage("en"),
      [language],
  );

  const langContext = {
    language: language,
    toggleLanguage: toggleLanguageFunc
  };

  const loginContext = {
    userId: userId,
    setUserId: setUserId,
  };


  console.log("loginContext in Container",loginContext)

  return (
      <LanguageContext.Provider value={langContext}>
        <LoginContext.Provider value={loginContext}>
          <App
              getConcerts={props.getConcerts}/>
        </LoginContext.Provider>
      </LanguageContext.Provider>)

}

AppContainer.propTypes = {
  getConcerts: PropTypes.func,
}

export default AppContainer;


