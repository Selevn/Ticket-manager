import React from 'react'

import {LanguageContext} from "../../Contexts/LanguageContext.js"
import languagePack from "../../../language.js";
import {Col, Container, Row} from "react-bootstrap";

import style from "./Search.module.css"
<<<<<<< HEAD

const Search = () => (<>
  <LanguageContext.Consumer>
    {langProps => (
        <Container>
          <Row>
            <Col xs={12} sm={12} md={3} lg={2} xl={3}/>
            <Col className={style.headerCol}><h1>{languagePack.search[langProps.language]}</h1></Col>
            <Col xs={12} sm={12} md={3} lg={2} xl={3}/>
          </Row>
          <Row>
            <Col xs={12} sm={12} md={3} lg={2} xl={3}/>
            <Col className={style.searchCol}>
              <form>
                <Container>
                  <Row>
                    <Col className={style.center}>
                      <input className={style.searchInput} placeholder={languagePack.place[langProps.language]} type={"text"}/>
                      <br/>
                      <input className={style.searchInput} placeholder={languagePack.band[langProps.language]} type={"text"}/>
                      <br/>
                    </Col>
                    <Col className={style.center}>
                      <input className={style.searchInput} type={"date"}/>
                      <br/>
                      <input className={style.searchInput} placeholder={languagePack.ticketCounter[langProps.language]} type={"number"} min="1"/>
                    </Col>
                  </Row>
                  <Row>
                    <Col className={style.center}>
                      <input className={style.searchBut} value={languagePack.search[langProps.language]} type={"submit"}/>
                    </Col>
                  </Row>
                </Container>
              </form>
            </Col>
            <Col xs={12} sm={12} md={3} lg={2} xl={3}/>
          </Row>

        </Container>
    )}
  </LanguageContext.Consumer>
</>)
=======
import languageSrc from "../../../language";
import ConcertItem from "../../CommonData/ConcertItem.jsx"
import Particle from "../../CommonData/Paricles/Particles.jsx";
import PropTypes from "prop-types";
import Concert from "../Concert/Concert.jsx";

const Search = ({concerts, allConcerts, changer, inputsValues: [place, band, startDate, endDate, ticketNumber],search}) => {
  const particle = useMemo(() => (<Particle/>), [])
  let halls = []
  allConcerts.forEach((item) => {
    if (halls.indexOf(item.place) === -1)
      halls.push(item.place)
  })


  return (<>
    <LanguageContext.Consumer>
      {langProps => {
        return (
            <>
              {particle}
              <div className={"mainContainer"}>
                <div className={"pageHeaderRow " + style.pageHeaderSchedule}>
                  <div className={"pageHeader"}>
                    {languageSrc.search[langProps.language]}
                  </div>
                  <div className={style.searchDiv}>
                    <div className={style.searchSubBlock}>
                      <label htmlFor={"halls"}>{languageSrc.place[langProps.language]}</label>
                      <select name="place" className={style.hallsSelect} onChange={changer}>
                        <option value={place}>--/--</option>
                        {halls.map((item) => {
                          return (
                              <option value={item}>{item}</option>
                          )
                        })}
                      </select>
                    </div>
                    <div className={style.searchSubBlock}>
                      <label>Band</label>
                      <input name="band"
                             onChange={changer}
                             className={style.searchInput}
                             placeholder={languagePack.band[langProps.language]}
                             value={band}
                             type={"text"}/>
                    </div>
                    <div className={style.searchSubBlock}>
                      <label>Period</label>
                      <div className={style.flexRow}>
                        <input
                            onChange={changer}
                            className={style.searchInput}
                            name={"startDate"}
                            type={"date"}
                            placeholder={"С"}/>
                        <span> - </span>
                        <input onChange={changer}
                               className={style.searchInput}
                               name={"endDate"}
                               type={"date"}
                               placeholder={"по"}/>
                      </div>
                    </div>
                    <div className={style.searchSubBlock}>
                      <label>{languagePack.ticket[langProps.language]}</label>
                      <input className={style.searchInput}
                             placeholder={languagePack.ticketCounter[langProps.language]}
                             type={"number"}
                             name={"ticketNumber"}
                             min="1"
                             max="100"
                             onChange={changer}
                             value={ticketNumber}/>
                    </div>
                    <div className={style.searchSubBlock}>
                      <input className={style.searchBut}
                             onClick={search}
                             value={languagePack.search[langProps.language]}
                             type={"submit"}/>
                    </div>
                  </div>
                </div>
                <div className={style.mainData}>
                  {
                    concerts.map((item, index) =>
                        (<ConcertItem item={item}
                                      langProps={langProps}
                                      key={index}/>)
                    )
                  }
                </div>
              </div>
            </>
        )
      }}
    </LanguageContext.Consumer>
  </>)
}
>>>>>>> 7e79654... search page functionsl

Search.propTypes = {
  concerts: PropTypes.array,
  changer: PropTypes.func,
  inputsValues: PropTypes.array,
}

export default Search;