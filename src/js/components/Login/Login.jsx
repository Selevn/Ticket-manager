import React, {useMemo} from "react";
import PropTypes from "prop-types"

import style from "./Login.module.css"
import {LanguageContext} from "../Contexts/LanguageContext.js";
import languagePack from "../../language.js";
import Particle from "../CommonData/Paricles/Particles.jsx";

const Login = ({email, onMailChange, password, onPasswordChange, loginHandler, registerHandler, loading}) => {
  const particle = useMemo(() => (<Particle height={"100%"}/>), [])
  return (
    <>
      <LanguageContext.Consumer>
        {langProps => {
          return (
            <>
              {particle}
              <div className={style.loginContainer} id="loginContainer">
                <div className={style.loginCol}>
                  <div className={style.loginHeader}>{languagePack.login[langProps.language]}</div>
                  <div className={style.inputs}>
                    <input
                      type={"text"}
                      placeholder={"Email"}
                      className={style.formInput}
                      value={email}
                      onChange={onMailChange}
                      tabIndex={1}
                    />
                    <input type={"password"}
                           placeholder={"Password"}
                           className={style.formInput}
                           value={password}
                           onChange={onPasswordChange}
                           tabIndex={2}
                    />
                    <div className={style.buttons}>
                      <button
                        tabIndex={4}
                        className={style.loginBut}
                        onClick={registerHandler}
                        disabled={loading}>Register
                      </button>
                      <button
                        tabIndex={3}
                        className={style.loginBut}
                        onClick={loginHandler}
                        disabled={loading}>Sign in
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </>)
        }}
      </LanguageContext.Consumer>
    </>
  )
};
Login.propTypes = {
  email: PropTypes.string,
  onMailChange: PropTypes.func,
  password: PropTypes.string,
  onPasswordChange: PropTypes.func,
  loginHandler: PropTypes.func,
  registerHandler: PropTypes.func,
  loading: PropTypes.bool
}

export default Login;