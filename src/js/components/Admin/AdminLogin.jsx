import React from "react";
import {Col, Container, Row} from "react-bootstrap";


import style from "./Admin.module.css"
import {LanguageContext} from "../Contexts/LanguageContext.js";
import languagePack from "../../language.js";

const AdminLogin = (props) => (
    <>
      <LanguageContext.Consumer>
<<<<<<< HEAD
        {langProps => (
=======
        {langProps=>(
>>>>>>> c792f03... login+admin page start layout
            <Container className={style.loginContainer}>
              <Row>
                <Col xs={12} sm={12} md={3} lg={3} xl={4}/>
                <Col className={style.loginCol} xs={12} sm={12} md={6} lg={6} xl={4}>
                  <h3>{languagePack.login[langProps.language]}</h3>
                  <form>
                    <input
<<<<<<< HEAD
                        type={"text"}
                        placeholder={"Email"}
                        className={style.formInput}
                        value={props.email}
                        onChange={props.onMailChange}/>
=======
                           type={"text"}
                           placeholder={"Email"}
                           className={style.formInput}
                           value={props.email}
                           onChange={props.onMailChange}/>
>>>>>>> c792f03... login+admin page start layout
                    <br/>
                    <input type={"password"}
                           placeholder={"Password"}
                           className={style.formInput}
                           value={props.password}
                           onChange={props.onPasswordChange}/>

<<<<<<< HEAD
                    <br/>
=======
                      <br/>
>>>>>>> c792f03... login+admin page start layout
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


export default AdminLogin;