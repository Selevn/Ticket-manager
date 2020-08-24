import React, {useState} from "react";
import AdminLogin from "./AdminLogin.jsx";

const AdminContainer = () => {

  let [email, setEmail] = useState("")
  let [password, setPassword] = useState("")

<<<<<<< HEAD
  const onMailChange = (event) => {
    setEmail(event.target.value)
  }
  const onPasswordChange = (event) => {
    setPassword(event.target.value)
  }

  return (
      <AdminLogin email={email} onMailChange={onMailChange} password={password} onPasswordChange={onPasswordChange}/>
  )
};
=======
  const onMailChange = (event) =>{
    setEmail(event.target.value)
  }
  const onPasswordChange = (event) =>{
    setPassword(event.target.value)
  }

  return(
  <AdminLogin email={email} onMailChange = {onMailChange} password={password} onPasswordChange = {onPasswordChange} />
)};
>>>>>>> c792f03... login+admin page start layout


export default AdminContainer;