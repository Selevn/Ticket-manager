import {useCallback, useContext} from "react";
import {LoginContext} from "../components/Contexts/LoginContext.js";
import * as jwt from "jsonwebtoken";

const storage = "userStorage"

export const useAuth = () =>{
  const [token,setToken] = useState(null)
  const [userId,setUserId] = useState(null)
  const login = useCallback((JWT, id)=>{
    setToken(JWT)
    setUserId(id)
    localStorage.setItem(storage,JSON.stringify(userId, token))
  })
  const logout = useCallback(()=>{
    setToken(null)
    setUserId(null)
    localStorage.removeItem(storage)
  })

  useEffect(()=>{
    const data = JSON.parse(localStorage.getItem(storage));

    if(data && data.token){
      setToken(data.token)
      setUserId(data.userId)
    }
  }, [login])

  const isLoggined = useCallback(() => {
    const data = JSON.parse(localStorage.getItem(storage));
    return data && data.token && (Date.now() / 1000 < jwt.decode(data.token).exp);
  }, [])

  return {login, logout, isLoggined}
}