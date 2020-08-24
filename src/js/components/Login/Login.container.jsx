import React, {useState} from "react";
import Login from "./Login.jsx";

const LoginContainer = () => {

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  const onMailChange = (event) =>{
    setEmail(event.target.value)
  }
  const onPasswordChange = (event) =>{
    setPassword(event.target.value)
  }

  return(
  <Login email={email} onMailChange = {onMailChange} password={password} onPasswordChange = {onPasswordChange} />
)};


export default LoginContainer;