import React from "react";
import PropTypes from "prop-types"
import {Col, Container, Row} from "react-bootstrap";
import languagePack from "../../language.js";
import style from "./Account.module.css"

const Account = ({logout, userId,langProps}) => (<>
      <Container>
        <Row className={style.headerRow}>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}></Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6} className={style.headerNameCol}>{languagePack.account[langProps.language]}</Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className={style.logoutButCol}><button onClick={logout}>Logout</button></Col>
        </Row>
      </Container>
    </>
)
Account.propTypes ={
    logout:PropTypes.func,
    langProps:PropTypes.obj,
    userId:PropTypes.number,
}

export default Account