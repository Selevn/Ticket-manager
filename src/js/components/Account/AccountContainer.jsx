import React, {useCallback, useContext} from "react";
import Account from "./Account.jsx"
import {useAuth} from "../../customHooks/auth.hook.js";
import {useHistory} from "react-router-dom"
import {LoginContext} from "../Contexts/LoginContext.js";
import {LanguageContext} from "../Contexts/LanguageContext.js";

const AccountContainer = () => {
  const langProps = useContext(LanguageContext)
  const auth = useAuth()
  console.log("in accountContainer",auth.logout,auth.userId)
  const loginContext = useContext(LoginContext)
  const history = useHistory();

  const logoutHandler = useCallback(() => {
    try {
      auth.logout()
      loginContext.setUserId(null)
      console.log("loginContext after logout",loginContext)
      console.log("userId after logout",auth.userId)
      history.push("/")
    } catch (e) {
      console.log(e)
    }
  })

  if (loginContext.userId) {
    return (<Account
        logout={logoutHandler}
        userId={loginContext.userId}
        langProps={langProps}
    />)
  } else {
    history.push("/home")
    return(<></>)
  }

}

export default AccountContainer