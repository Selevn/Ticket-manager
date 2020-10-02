import React, {useEffect, useMemo} from 'react'
import {Link, useParams} from "react-router-dom";

import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import style from "./Home.module.css"
import "./Home.css"
import { useHistory } from "react-router-dom";
import {Search} from 'react-bootstrap-icons';
import Particle from "../../CommonData/Paricles/Particles.jsx";
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

const Home = ({concerts, onInputChange, upcomingConcerts, searchText, onSearch, onEnterSearch, inputRef, showMore, concertInBaseCount}) => {

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
    <LanguageContext.Consumer>
      {langProps => (
        <>
          <div className={"mainContainer"} id={"mainContainerRef"}>
            {particle}
            <div className={"pageHeaderRow"}>
              <div className={"pageHeader"}>
                {languageSrc.soon[langProps.language]}
              </div>
              <div className={style.searchBlock}>
                <input
                  className={style.searchInput}
                  placeholder={languageSrc.search[langProps.language]}
                  type="text"
                  value={searchText}
                  onChange={onInputChange}
                  onKeyDown={onEnterSearch}
                  ref={inputRef}
                />
                <button
                  className={style.searchBut}
                  onClick={onSearch}>
                  <Search color="black" className={style.searchIcon}/>
                </button>
              </div>
              <div className={style.tip}>
                {
                  concerts[0] && (<ul className={style.tipUl}>
                    {concerts.map((item) =>
                      <li className={style.tipLi} key={item.id}>
                        <Link className={style.tipLink}
                              to={"concert/" + item.id}>{item.band}</Link>
                      </li>)}
                  </ul>)
                }
              </div>
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
                      <div key={item.id} className={style.soonCard} tabIndex={0}>
                        <div className={style.frontImage} tabIndex={1}>
                          <Link
                            to={"concert/" + (upcomingConcerts.length > 0 ? upcomingConcerts[index].id : index)}>
                            <img alt={"Concert image"} className={style.centreImage}
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
            {(concertInBaseCount - upcomingConcerts.length >= 3) && (
              <div className={style.more}
                   onClick={showMore}>
                                <span
                                  className={style.centerAlign}
                                >{languageSrc.more[langProps.language]}</span>
              </div>)}
              {(concertInBaseCount - upcomingConcerts.length < 3) && (
              <Link to={'/schedule'}> <div className={style.more}>
                                <span
                                  className={style.centerAlign}
                                >{languageSrc.more[langProps.language]}</span>
              </div></Link>)}

          </div>
        </>
      )}
    </LanguageContext.Consumer>
  </>)
}


Home.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func,
  upcomingConcerts: PropTypes.array,
  onFocusOut: PropTypes.func,
  onEnterSearch: PropTypes.func,
  onSearch: PropTypes.func,
  inputRef: PropTypes.object,
  showMore: PropTypes.func,
  concertInBaseCount: PropTypes.number,
}

export default Home;