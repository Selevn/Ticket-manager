<<<<<<< HEAD
import React from 'react'
import {Link} from "react-router-dom";
=======
import React, {useEffect, useMemo} from 'react'
import {Link, useParams} from "react-router-dom";
>>>>>>> 27369a8... e-mail approvement, small fixes

import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import style from "./Home.module.css"
import "./Home.css"
<<<<<<< HEAD

<<<<<<< HEAD

import {Container, Row, Col} from "react-bootstrap";

=======
=======
import { useHistory } from "react-router-dom";
>>>>>>> 27369a8... e-mail approvement, small fixes
import {Search} from 'react-bootstrap-icons';
import Particle from "../../CommonData/Paricles/Particles.jsx";
>>>>>>> 7e79654... search page functionsl
import PropTypes from "prop-types"
import {backendUrl} from "../../../../../config/default.json";

//оставить так или в коллбэк?
async function checkApprovement(user, secret){
  const method = "POST",
    body = JSON.stringify(
      {
        user: user,
        secret: secret
      }),
    headers = {"Content-Type": 'application/json'};
  const response = await fetch(backendUrl + "/api/auth/tryToApprove", {method, body, headers})
  const data = await response.json()
  if(data.message)
  {
    window.M.toast({
      html: "Approved!",
      displayLength: 5000,
      classes: "success"
    })
  }
  if (!response.ok){
    console.log(response)
  }
}

<<<<<<< HEAD
<<<<<<< HEAD
const Home = ({concerts, onInputChange, upcomingConcerts, searchText, onSearch, onEnterSearch,liRef,onListNavigation,inputRef}) => {
  console.log("render home component")
=======
const Home = ({concerts, onInputChange, upcomingConcerts, searchText, onSearch, onEnterSearch,liRef}) => {
=======
const Home = ({concerts, onInputChange, upcomingConcerts, searchText, onSearch, onEnterSearch,inputRef}) => {
>>>>>>> 3167f10... db command modules + link react with node.js

<<<<<<< HEAD
>>>>>>> 90f8302... started adding ref
  return (<div>
=======
  const history = useHistory();

  const globalId = useParams();
  useEffect(()=>{
    if(globalId.secret)
      checkApprovement(globalId.user,globalId.secret).then(()=>{

        history.push('/home')
      })
  },[globalId.secret])

  const particle = useMemo(
    () => (<Particle/>), []
  )
  return (<>
>>>>>>> 27369a8... e-mail approvement, small fixes
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
<<<<<<< HEAD
                    <ul className={style.tipUl} onKeyDown={onListNavigation}>
                      {concerts.map((item, index) =>
                          <li ref={el => liRef.current[index] = el} className={style.tipLi} key={item.id}  onFocus={()=>{console.log("focused")}}>
                            <Link  className={style.tipLink} to={"concert/" + item.id}>{item.band}</Link>
=======
                    <ul className={style.tipUl}>
                      {concerts.map((item, index) =>
                          <li className={style.tipLi} key={item.id} ref={el => liRef.current[index] = el} onFocus={()=>{console.log("focused")}}>
                            <Link className={style.tipLink} to={"concert/" + item.id}>{item.band}</Link>
>>>>>>> 90f8302... started adding ref
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
<<<<<<< HEAD
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
=======
                        </div>
                        <div className={style.recentRow}>
                            {
                                upcomingConcerts[0] && upcomingConcerts.map(
                                    (item, index) => {
                                        let day, month, year;
                                        day = new Date(item.date).getDate() + 1;
                                        month = languageSrc.months[new Date(item.date).getMonth()][langProps.language];
                                        year = new Date(item.date).getFullYear();

                                        return (
                                            <div className={style.soonCard}>
                                                <div className={style.frontImage}>
                                                    <Link
                                                        to={"concert/" + (upcomingConcerts.length > 0 ? upcomingConcerts[index].id : index)}>
                                                        <img className={style.centreImage}
                                                             src={upcomingConcerts.length !== 0 ? upcomingConcerts[index].imgSrc : "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"}/>
                                                    </Link>
                                                </div>
                                                <div className={style.backImage}>
                                                    <Link
                                                        to={"concert/" + (upcomingConcerts.length !== 0 && upcomingConcerts[index].id)}>
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
                                        )
                                    })
                            }
                        </div>
                        {(concertInBaseCount - upcomingConcerts.length > 3) && (
                            <div className={style.more}
                                 onClick={showMore}>
                                <span
                                    className={style.centerAlign}
                                >{languageSrc.more[langProps.language]}</span>
                            </div>)}
                    </div>
                </>
            )}
        </LanguageContext.Consumer>
    </>)
>>>>>>> 7e79654... search page functionsl
}


Home.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func,
  upcomingConcerts: PropTypes.array,
  onFocusOut: PropTypes.func,
  onEnterSearch: PropTypes.func,
  onSearch: PropTypes.func,
  onListNavigation: PropTypes.func,
  liRef: PropTypes.object,
}

export default Home;