import React, {useState} from "react";
import Login from "./Login.jsx";
import {useHttp} from "../../customHooks/server.response.js";
import {backendUrl} from "../../../../config/default.json";
import {useAuth} from "../../customHooks/auth.hook.js";
import {useHistory} from "react-router-dom"

import 'materialize-css'

const LoginContainer = () => {

  const history = useHistory()
  const authHook = useAuth()
  const {loading, request} = useHttp();
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")


  const registerHandler = async () => {
    try {
      const data = await request(backendUrl + "/api/auth/register", "POST", {email: email, password: password})
      window.M.toast({html: data.message, displayLength:5000, classes:"success"})
    } catch (e) {
      window.M.toast({html: e.message, displayLength:5000, classes:"error"})
    }
  }
  const loginHandler = async () => {
    try {
      const data = await request(backendUrl + "/api/auth/login", "POST", {email: email, password: password})
      authHook.login(data.token, data.id, data.userType)
      history.push("/home")
    } catch (e) {
      window.M.toast({html: e.message, displayLength:5000, classes:"error"})
    }
  }
  const onMailChange = (event) => {
    setEmail(event.target.value)
  }
  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
      <Login email={email}
             onMailChange={onMailChange}
             password={password}
             onPasswordChange={onPasswordChange}
             loginHandler={loginHandler}
             registerHandler={registerHandler}
             loading={loading}/>
  )
};


export default LoginContainer;