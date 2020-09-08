import React, {useCallback, useContext, useEffect, useMemo, useState} from "react";
import Account from "./Account.jsx"
import {useAuth} from "../../customHooks/auth.hook.js";
import {useHistory} from "react-router-dom"
import {LoginContext} from "../Contexts/LoginContext.js";
import {LanguageContext} from "../Contexts/LanguageContext.js";
import {backendUrl} from "../../../../config/default.json";

const storage = "userStorage"
const AccountContainer = () => {
  const langProps = useContext(LanguageContext)
  const {logout} = useAuth()
  const loginContext = useContext(LoginContext)
  const history = useHistory();
  const [tickets,setTickets] = useState({});

  const getTickets = useMemo(async () => {
    let method = "POST", body = localStorage.getItem("userStorage","token"), headers = {"Content-Type":'application/json'};
    console.log(body)
    const response = await fetch(backendUrl+"/api/tickets/getMyTickets", {method, body, headers})
    const data = await response.json()
    setTickets(data)
    if (!response.ok) {
      throw new Error(data.message || "Что-то пошло не так")
    }
  }, [localStorage.getItem("userStorage","token")])


  const logoutHandler = async () => {
    try {
      logout()
      history.push("/")
    } catch (e) {
      console.log("Logout Error")
    }
  }
  if (loginContext.userId) {
    return (<Account
        logout={logoutHandler}
        userId={loginContext.userId}
        langProps={langProps}
        tickets={tickets}
    />)
  } else {
    history.push("/home")
    return (<></>)
  }

}

export default AccountContainer