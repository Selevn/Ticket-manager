import {useCallback, useEffect, useState} from "react";

const storage = "userStorage"

export const useAuth = () => {
  const [token, setToken] = useState(null)
  const [userType, setUserType] = useState(null)
  const [userId, setUserId] = useState(null)

  const login = useCallback((JWT, id, type) => {
    setToken(JWT)
    setUserId(id)
    setUserType(type)
    localStorage.setItem(storage, JSON.stringify({userId: id, token: JWT, userType: type}))
  }, [])

  const logout = useCallback(() => {
    setToken(null)
    setUserId(null)
    setUserType(null)
    localStorage.removeItem(storage)
  }, [])

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem(storage));
    if (data && data.token) {
      setToken(data.token)
      setUserId(data.userId)
      setUserType(data.userType)
      console.log("setters works!")
    }
  }, [login])

  return {login, logout, token, userId, userType}
}