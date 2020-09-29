import React from "react";
import {Col, Container, Row} from "react-bootstrap";


import style from "./Admin.module.css"
import {LanguageContext} from "../Contexts/LanguageContext.js";
import languagePack from "../../language.js";
import PropTypes from "prop-types";

const AdminLogin = ({email, onMailChange, password, onPasswordChange}) => (
    <>
      <LanguageContext.Consumer>
        {langProps => (
            <Container className={style.loginContainer}>
              <Row>
                <Col xs={12} sm={12} md={3} lg={3} xl={4}/>
                <Col className={style.loginCol} xs={12} sm={12} md={6} lg={6} xl={4}>
                  <h3>{languagePack.login[langProps.language]}</h3>
                  <form>
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
                    <input type={"submit"}/>
                  </form>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={4}/>
              </Row>
            </Container>
        )}

      </LanguageContext.Consumer>
    </>
);
AdminLogin.propTypes = {
  email: PropTypes.string,
  password: PropTypes.string,
  onMailChange: PropTypes.func,
  onPasswordChange: PropTypes.func,
}

export default AdminLogin;