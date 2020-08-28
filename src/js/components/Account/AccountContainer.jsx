import React from "react";
import Account from "./Account.jsx"
import {useAuth} from "../../customHooks/auth.hook.js";


const AccountContainer = () =>{
  const {logout,token,userId} = useAuth()
  return(<Account
      logout={logout}
      token={token}
      userId={userId}
    />)
}

export default AccountContainer