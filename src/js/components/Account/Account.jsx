import React from "react";
import PropTypes from "prop-types"
import {Col, Container, Row} from "react-bootstrap";
import languagePack from "../../language.js";
import style from "./Account.module.css"

const Account = ({logout, langProps}) => (<>
        <Container>
            <Row className={style.headerRow}>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}></Col>
                <Col xs={12} sm={12} md={6} lg={6} xl={6}
                     className={style.headerNameCol}><h1>{languagePack.myTickets[langProps.language]}</h1></Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3} className={style.logoutButCol}>
                    <button className={style.logoutBut}
                            onClick={logout}>{languagePack.logout[langProps.language]}</button>
                </Col>
            </Row>
            <Row>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}></Col>
                <Col xs={12} sm={12} md={3} lg={6} xl={6} className={style.headerNameCol}>
                    <table className={style.ticketTable}>
                        <thead></thead>
                        <tbody>
                        <tr> {/*tr->td*/}
                            <td>{languagePack.band[langProps.language]}</td>
                            <td>{languagePack.place[langProps.language]}</td>
                            <td>{languagePack.date[langProps.language]}</td>
                            <td>{languagePack.cost[langProps.language]}</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        <tr>
                            <td>1</td>
                            <td>2</td>
                            <td>3</td>
                            <td>4</td>
                        </tr>
                        </tbody>
                    </table>
                </Col>
                <Col xs={12} sm={12} md={3} lg={3} xl={3}></Col>
            </Row>
        </Container>
    </>
)
Account.propTypes = {
    logout: PropTypes.func,
    langProps: PropTypes.obj,
    userId: PropTypes.number,
}

export default Account