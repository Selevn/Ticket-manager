import React, {useCallback, useContext, useEffect, useState} from "react";
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
  const [tickets, setTickets] = useState([]);
  const [filter, setFilter] = useState('future');

  const changer = useCallback((event) => {
    setFilter(event.target.value)
  }, [])

  /*const getTickets = useMemo(async () => {
    let method = "POST",
      body = localStorage.getItem(storage, "token"),
      headers = {"Content-Type": 'application/json'};
    const response = await fetch(backendUrl + "/api/tickets/getMyTickets", {method, body, headers})
    const data = await response.json()
    setTickets(data)
    if (!response.ok) {
      throw new Error(data.message || "Что-то пошло не так")
    }
  }, [localStorage.getItem("userStorage", "token")])
*/

  useEffect(() => (
      async () => {
        let method = "POST",
            body = localStorage.getItem(storage, "token"),
            headers = {"Content-Type": 'application/json'};
        const response = await fetch(backendUrl + "/api/tickets/getMyTickets", {method, body, headers})
        const data = await response.json()
        setTickets(data)
        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так")
        }
      }), [localStorage.getItem("userStorage", "token")])

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
        filter={filter}
        changer={changer}
    />)
  } else {
    history.push("/home")
    return (<></>)
  }

}

export default AccountContainer