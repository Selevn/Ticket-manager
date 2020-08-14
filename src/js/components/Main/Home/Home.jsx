import React from 'react'
import {Link} from "react-router-dom";

import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import style from "./Home.module.css"
import "./Home.css"


import {Container, Row, Col} from "react-bootstrap";

import PropTypes from "prop-types"


const Home = ({concerts, onInputChange, recent, onFocusOut, searchText}) => (<div>
  <LanguageContext.Consumer>
    {langProps => (
        <div>
          <Container className={style.recentContainer}>
            <Row className={style.firstRow}>
              <Col sm={3} xs={3} md={3} lg={3} xl={3}>

              </Col>
              <Col className={style.searchColumn} sm={12} xs={12} md={12} lg={6} xl={6}>
                <form>
                  <input
                      className={style.searchInput}
                      placeholder={languageSrc.type[langProps.language]}
                      type="text"
                      value={searchText}
                      onChange={onInputChange}
                      onBlur={onFocusOut}
                  />
                  <input
                      className={style.searchBut}
                      type="button"
                      onClick={() => {
                      }}
                      value={languageSrc.search[langProps.language]}/>
                </form>
                <div className={style.tip}>
                  <ul className={style.tipUl}>
                    {concerts.map((item, index) =>
                        <li className={style.tipLi} key={index}>
                          <Link className={style.tipLink} to={"concert/" + item.id}>{item.band}</Link>
                        </li>)}
                  </ul>
                </div>
              </Col>
              <Col sm={3} xs={3} md={3} lg={3} xl={3}>
              </Col>
            </Row>
            <Row className={style.recentRow}>
              <Col>
                <h1>{languageSrc.soon[langProps.language]}</h1>
              </Col>
            </Row>
            <Row className={style.recentRow}>
              {[
                {classNameDiv: "leftDiv"},
                {classNameDiv: "centreDiv"},
                {classNameDiv: "rightDiv"},
              ].map(
                  (item, index) =>
                      (<Col sm={12} xs={12} md={12} lg={4} xl={4} key={index}>
                            <div className={style[item.classNameDiv]}>
                              <div className={style.frontImage}>
                                <img className={style.centreImage}
                                     src={recent.length !== 0 ? recent[index].imgSrc : "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"}/>
                              </div>
                              <div className={style.backImage}>
                                <div className={style.infoCol}>
                                  <span>{languageSrc.band[langProps.language]}: </span>
                                  <b>{recent.length !== 0 && recent[index].band}</b>
                                  <br/>
                                  <span>{languageSrc.place[langProps.language]}: </span>
                                  <b>{recent.length !== 0 && recent[index].place}</b>
                                  <br/>
                                  <span>{languageSrc.date[langProps.language]}: </span>
                                  <b>{recent.length !== 0 && recent[index].date}</b>
                                  <br/>
                                </div>
                              </div>
                            </div>
                          </Col>
                      )
              )}
            </Row>
          </Container>
        </div>
    )}
  </LanguageContext.Consumer>
</div>)


Home.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func,
  recent: PropTypes.array,
  onFocusOut: PropTypes.func,
}

export default Home;