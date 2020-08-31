import React from "react"

export const LoginContext = React.createContext({
  userId: null,
  setUserId: ()=>{},
});

LoginContext.displayName = 'LoginContext';