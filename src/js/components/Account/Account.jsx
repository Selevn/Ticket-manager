import React from "react";
import PropTypes from "prop-types"
import {Col, Container, Row} from "react-bootstrap";
import languagePack from "../../language.js";
import style from "./Account.module.css"

const Account = ({logout, langProps, tickets}) => (<>
      <Container className={style.mainContainer}>
        <Row className={style.headerRow}>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}></Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}
               className={style.headerNameCol}><h1>{languagePack.myTickets[langProps.language]}</h1></Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className={style.logoutButCol}>
            <button className={style.logoutBut} onClick={logout}>{languagePack.logout[langProps.language]}</button>
          </Col>
        </Row>
        <Row>

          <Col xs={12} sm={12} md={12} lg={12} xl={12} className={style.headerNameCol}>
            <table className={style.ticketTable}>
              <thead></thead>
              <tbody>
              <tr> {/*tr->td*/}
                <td className={style.boldHeader}>{languagePack.band[langProps.language]}</td>
                <td className={style.boldHeader}>{languagePack.place[langProps.language]}</td>
                <td className={style.boldHeader}>{languagePack.date[langProps.language]}</td>
                <td className={style.boldHeader}>{languagePack.cost[langProps.language]}</td>
              </tr>
              {tickets[0] && tickets.map((item) => {
                return (
                    <tr key={item.id} className={style.tableTr}>
                      <td className={style.tableTd}>{item.band}</td>
                      <td className={style.tableTd}>{item.place}</td>
                      <td className={style.tableTd}>{new Date(item.date).getDate()} {languagePack.months[new Date(item.date).getMonth()][langProps.language]} {new Date(item.date).getFullYear()}</td>
                      <td className={style.tableTd}>{item.cost}$</td>
                    </tr>
                )
              })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
)
Account.propTypes = {
  logout: PropTypes.func,
  langProps: PropTypes.obj,
  userId: PropTypes.number,
  tickets: PropTypes.array,
}

export default Account