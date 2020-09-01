import React, {useContext} from "react";
import Account from "./Account.jsx"
import {useAuth} from "../../customHooks/auth.hook.js";
import {useHistory} from "react-router-dom"
import {LoginContext} from "../Contexts/LoginContext.js";
import {LanguageContext} from "../Contexts/LanguageContext.js";

const AccountContainer = () => {
    const langProps = useContext(LanguageContext)
    const {logout} = useAuth()
    const loginContext = useContext(LoginContext)
    const history = useHistory();

    const logoutHandler = async () => {
        try {
            logout()
            history.push("/")
        } catch (e) {
            console.log(e)
        }
    }

    if (loginContext.userId) {
        return (<Account
            logout={logoutHandler}
            langProps={langProps}
        />)
    } else {
        history.push("/home")
        return (<></>)
    }

}

export default AccountContainer