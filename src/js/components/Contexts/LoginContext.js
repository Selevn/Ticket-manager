import React from "react"

export const LoginContext = React.createContext({
  token: null,
  userId: null,
  login: ()=>{},
  logout: ()=>{},
  isAutenticated: false,
});

LoginContext.displayName = 'LoginCOntext';