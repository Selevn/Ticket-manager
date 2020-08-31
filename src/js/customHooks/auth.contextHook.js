import {useContext} from "react";
import {LoginContext} from "../components/Contexts/LoginContext.js";

export const useContextHook = () => {
  return useContext(LoginContext)
}