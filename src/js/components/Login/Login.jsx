import React from "react";
import {Col, Container, Row} from "react-bootstrap";
import PropTypes from "prop-types"

import style from "./Login.module.css"
import {LanguageContext} from "../Contexts/LanguageContext.js";
import languagePack from "../../language.js";

const Login = ({email, onMailChange, password, onPasswordChange, loginHandler, registerHandler, loading}) => (
    <>
      <LanguageContext.Consumer>
        {langProps => {
          return (
              <Container className={style.loginContainer}>
                <Row>
                  <Col xs={12} sm={12} md={3} lg={3} xl={4}/>
                  <Col className={style.loginCol} xs={12} sm={12} md={6} lg={6} xl={4}>
                    <h3>{languagePack.login[langProps.language]}</h3>
                    <input
                        type={"text"}
                        placeholder={"Email"}
                        className={style.formInput}
                        value={email}
                        onChange={onMailChange}/>
                    <br/>
                    <input type={"password"}
                           placeholder={"Password"}
                           className={style.formInput}
                           value={password}
                           onChange={onPasswordChange}/>

                    <br/>
                    <button
                        className={style.loginBut}
                        onClick={loginHandler}
                        disabled={loading}>Sign in
                    </button>
                    <button
                        className={style.loginBut}
                        onClick={registerHandler}
                        disabled={loading}>Register
                    </button>
                  </Col>
                  <Col xs={12} sm={12} md={3} lg={3} xl={4}/>
                </Row>
              </Container>
          )
        }}

      </LanguageContext.Consumer>
    </>
);
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