import React, {useEffect, useState} from "react";
import Login from "./Login.jsx";
import {useHttp} from "../../customHooks/server.response.js";
import {backendUrl} from "../../../../config/default.json";

const LoginContainer = () => {


  ///////////////////////////////////////////////////////////////////////

  const {loading, error, request} = useHttp();
  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  const registerHandler = async () => {
    try {
      const data = await request(backendUrl + "/api/auth/register", "POST", {email: email, password: password})
    } catch (e) {
      console.log(e)
    }
  }
  const loginHandler = async () => {
    try {
      const data = await request(backendUrl+"/api/auth/login", "POST", {email: email, password: password})
      console.log("Data", data)
    } catch (e) {
      console.log(e)
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