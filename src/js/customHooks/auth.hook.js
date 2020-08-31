import {useCallback, useEffect, useState} from "react";

const storage = "userStorage"

export const useAuth = () => {
  //sets and return tokens on login/logout, set localStorage
  const [token, setToken] = useState(null)
  /*let JWTToken = null;*/
  const [userType, setUserType] = useState(null)
  const [userId, setUserId] = useState(null)

  const login = (JWT, id, type) => {
    console.log("what we want",JWT)
    console.log("before",token)
    setToken(JWT)
    console.log("after",token)
    setUserId(id)
    setUserType(type)
    localStorage.setItem(storage, JSON.stringify({userId: id, token: JWT, userType: type}))
    console.log("calls login in hook, now hook is",{login, logout, token, userId, userType}) //empty fields
    console.log("localStorage",JSON.parse(localStorage.getItem(storage))) //full fields
  }

  useEffect(()=>{return {login, logout, token, userId, userType}}, [login, logout, token, userId, userType])

  const logout = () => {
    console.log("calls logout in hook, hook was",{login, logout, token, userId, userType})
    setToken(null)
    setUserId(null)
    setUserType(null)
    localStorage.removeItem(storage)
    console.log("calls logout in hook, now hook is",{login, logout, token, userId, userType})
  }

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storage));
    console.log("DATA from localStorage:",data)
    if (data && data.token) {
      setToken(data.token)
      setUserId(data.userId)
      setUserType(data.userType)
    }
  }, [])



}