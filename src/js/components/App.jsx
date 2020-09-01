import React, {useState, useCallback, useEffect} from "react";
import PropTypes from "prop-types"
import Router from "./Router.js"
import {LanguageContext} from './Contexts/LanguageContext.js';
import {LoginContext} from "./Contexts/LoginContext.js";
import {Provider} from "react-redux";
import mainStore from "../store/concerts.store.js";
import {BrowserRouter} from "react-router-dom";

const storage = "userStorage"

function App(props) {


  const [token, setToken] = useState(null)
  const [userType, setUserType] = useState(null)
  const [userId, setUserId] = useState(null);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storage));
    if (data && data.token) {
      setToken(data.token)
      setUserId(data.userId)
      setUserType(data.userType)
      console.log("setters works!")
    }
  }, [])

  const [language, setLanguage] = useState("en");

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
    token: token,
    userType: userType,
    setUserId: setUserId,
    setToken: setToken,
    setUserType: setUserType,
  };

  console.log("loginContext", loginContext)

  return (
      <BrowserRouter>
        <Provider store={mainStore}>
          <LanguageContext.Provider value={langContext}>
            <LoginContext.Provider value={loginContext}>
              <Router
                  getConcerts={props.getConcerts}/>
            </LoginContext.Provider>
          </LanguageContext.Provider>
        </Provider>
      </BrowserRouter>
  )

}

App.propTypes = {
  getConcerts: PropTypes.func,
}

export default App;


