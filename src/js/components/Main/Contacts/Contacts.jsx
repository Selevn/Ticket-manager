import React from 'react'
import PropTypes from "prop-types"
import {Col, Container, Row} from "react-bootstrap";

import "./Contacts.css"

import languageSrc from "../../../language.js"
import {LanguageContext} from "../../Contexts/LanguageContext.js"

import style from "./Contacts.module.css"

const Contacts = ({getContacts, contacts}) => {
  getContacts();
  console.log(Object.entries(contacts));
  let _contacts = Object.entries(contacts);

  const SoloLine = (data) => (
      <tr>
        <td className={style.dateTr}>{data}</td>
      </tr>
  )
  const RowInitLine = (name, length, data) => (
      <tr className={style.newData}>
        <td rowSpan={length}>{name}</td>
        <td className={style.dateTr}>{data}</td>
      </tr>
  )
  const DefaultLine = (name, data) => (
      <tr className={style.newData}>
        <td>{name}</td>
        <td className={style.dateTr}>{data}</td>
      </tr>
  )

  return (
      <>
        <LanguageContext.Consumer>
          {langProps => (
              <Container>
                <Row>
                  <Col sm={12} xs={12} md={12} lg={12} xl={12} className={style.headerCol}>
                    <h1>{languageSrc.contacts[langProps.language]}</h1>
                  </Col>
                </Row>
                <Row>
                  <Col sm={12} xs={12} md={2} lg={3} xl={3}/>
                  <Col sm={12} xs={12} md={8} lg={6} xl={6} className={style.center}>
                    <table className={style.w100}>
                      <thead>
                      </thead>
                      <tbody>
                      {
                        _contacts.map((headItem) => {
                          if (Array.isArray(headItem[1])) {
                            return headItem[1].map((subItem, index) => {
                              if (index === 0) {
                                return RowInitLine(headItem[0], headItem[1].length, subItem)
                              } else {
                                return SoloLine(subItem)
                              }
                            })
                          } else {
                            return DefaultLine(headItem[0], headItem[1])
                          }
                        })
                      }
                      </tbody>
                    </table>
                  </Col>
                  <Col sm={12} xs={12} md={2} lg={3} xl={3} className={style.center}/>
                </Row>
              </Container>
          )}
        </LanguageContext.Consumer>
      </>)
}

Contacts.propTypes = {
  getContacts: PropTypes.func,
  contacts: PropTypes.object,
}

export default Contacts;