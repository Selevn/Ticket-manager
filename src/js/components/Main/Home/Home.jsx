import React from 'react'
import {Link} from "react-router-dom";

import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import style from "./Home.module.css"
import "./Home.css"


import {Container, Row, Col} from "react-bootstrap";

import PropTypes from "prop-types"

const Home = ({concerts, onInputChange, upcomingConcerts, searchText, onSearch, onEnterSearch,inputRef}) => {

  return (<div>
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
                        /*onChange={onInputChange}*/
                        onKeyDown={onEnterSearch}
                        ref = {inputRef}
                    />

                      <button
                          className={style.searchBut}
                          onClick={onSearch}>
                        {languageSrc.search[langProps.language]}</button>
                  </form>
                  <div className={style.tip}>
                    <ul className={style.tipUl}>
                      {concerts.map((item) =>
                          <li className={style.tipLi} key={item.id}>
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
                    (item, index) => {
                      let day, month, year;
                      if (upcomingConcerts.length > 0) {
                        day = new Date(upcomingConcerts[index].date).getDate() + 1;
                        month = languageSrc.months[new Date(upcomingConcerts[index].date).getMonth()][langProps.language];
                        year = new Date(upcomingConcerts[index].date).getFullYear();
                      }

                      return (<Col sm={12} xs={12} md={12} lg={4} xl={4}
                                   key={upcomingConcerts.length > 0 ? upcomingConcerts[index].id : index}>
                            <div className={style[item.classNameDiv]}>
                              <div className={style.frontImage}>
                                <Link
                                    to={"concert/" + (upcomingConcerts.length > 0 ? upcomingConcerts[index].id : index)}>
                                  <img className={style.centreImage}
                                       src={upcomingConcerts.length !== 0 ? upcomingConcerts[index].imgSrc : "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"}/>
                                </Link>
                              </div>
                              <div className={style.backImage}>
                                <Link to={"concert/" + (upcomingConcerts.length !== 0 && upcomingConcerts[index].id)}>
                                  <div className={style.infoCol}>
                                    <span>{languageSrc.band[langProps.language]}: </span>
                                    <b>{upcomingConcerts.length !== 0 && upcomingConcerts[index].band}</b>
                                    <br/>
                                    <span>{languageSrc.place[langProps.language]}: </span>
                                    <b>{upcomingConcerts.length !== 0 && upcomingConcerts[index].place}</b>
                                    <br/>
                                    <span>{languageSrc.date[langProps.language]}: </span>
                                    <b>{`${day} ${month} ${year}`}</b>
                                    <br/>
                                  </div>
                                </Link>
                              </div>
                            </div>
                          </Col>
                      )
                    }
                )}
              </Row>
            </Container>
          </div>
      )}
    </LanguageContext.Consumer>
  </div>)
}


Home.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func,
  upcomingConcerts: PropTypes.array,
  onFocusOut: PropTypes.func,
  onEnterSearch: PropTypes.func,
  onSearch: PropTypes.func,
}

export default Home;