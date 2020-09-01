import {useCallback, useContext} from "react";
import {LoginContext} from "../components/Contexts/LoginContext.js";

const storage = "userStorage"

export const useAuth = () => {
  const loginContext = useContext(LoginContext)

  const login = useCallback((JWT, id, type) => {
    loginContext.setUserId(id)
    loginContext.setToken(JWT)
    loginContext.setUserType(type)
    localStorage.setItem(storage, JSON.stringify({userId: id, token: JWT, userType: type}))
  }, [])

  const logout = useCallback(() => {
    loginContext.setUserId(null)
    loginContext.setToken(null)
    loginContext.setUserType(null)
    localStorage.removeItem(storage)
  }, [])

  return {login, logout}
}