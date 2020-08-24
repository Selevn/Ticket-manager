import React, {useState} from "react";
import AdminLogin from "./AdminLogin.jsx";

const AdminContainer = () => {

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

  const onMailChange = (event) =>{
    setEmail(event.target.value)
  }
  const onPasswordChange = (event) =>{
    setPassword(event.target.value)
  }

  return(
  <AdminLogin email={email} onMailChange = {onMailChange} password={password} onPasswordChange = {onPasswordChange} />
)};


export default AdminContainer;