import React from 'react';
import PropTypes from "prop-types"
import {Container, Row, Col} from "react-bootstrap"

import style from "./Ticket.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";


<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
const Ticket = ({data, back, currentSectorDesc, setSectorDesc, buyTicket, count, countChange}) => (
=======
const Ticket = ({data, back, sector, setSectorDesc, buyTicket, count, countChange, max}) => {
=======
const Ticket = ({data, back, sector, setSectorDesc, buyTicket, count, countChange, max, isLoggined}) => {
>>>>>>> 33800b6... Account page made + buy ticket features like a decline buying tickets for non-authed users
=======
const Ticket = ({data, back, sector, setSectorDesc, buyTicket, count, countChange, max, isLogined}) => {
>>>>>>> cf3d048... small update, start making eMail confirming
  const particle = useMemo(() => (<Particle/>), [])

    let freshDataOfSector = sector && data.find(item=>item.id===sector.id) || 0;
  max = Math.min(freshDataOfSector.numOfSeats - freshDataOfSector.tickCount, max)

  const tickCount = useMemo(() => {
    return(<>{sector && (freshDataOfSector.numOfSeats - freshDataOfSector.tickCount) || 0}</>)
  }, [sector,sector && freshDataOfSector.tickCount])

  let day, month, year, hour, minute, concert;
  concert = data[0];
  return (
>>>>>>> d548b86... buy ticket functional finished
    <LanguageContext.Consumer>
      {langProps => {
        return (<>
<<<<<<< HEAD
          <Container className={style.mainContainer}>
            <Row className={"headerRow"}>
              <Col className={style.centre}><h1>{languageSrc.buyTicket[langProps.language]}</h1></Col>
            </Row>
            <Row className={style.dataRow}>
              <Col className={style.sectorColumn}>
                {
                  data[0] && data.map((item) => {
                    return (
                        <Container className={style.sectorBlock} id={item.id + "sector"} onClick={(i) => {
                          setSectorDesc(item.id);
                          let collection = document.getElementsByClassName(style.active)
                          for (let i = 0; i < collection.length; i++) {
                            collection[i].classList.remove(style.active)
                          }
                          document.getElementById(item.id + "sector").classList.toggle(style.active)
                        }}>
                          <Row>
                            <Col></Col>
                            <Col className={style.sectorName}>{item.name}</Col>
                            <Col className={style.sectorCost}>{item.cost}$</Col>
                          </Row>
                        </Container>)
                  })
                }
              </Col>
              <Col className={style.centre}>
                {currentSectorDesc && (<h2>Features</h2>)}
                {currentSectorDesc && currentSectorDesc.features}
                <br/>
                {currentSectorDesc && "Num of seats: " + currentSectorDesc.numOfSeats}
              </Col>
            </Row>
            <Row className={style.centre}>
              <Col>
                <button className={style.buyButton} onClick={back}>{languageSrc.back[langProps.language]}</button>
              </Col>
              <Col/>
              <Col><input type="number" min={1} max={12} value={count} onChange={countChange}
                          className={style.counter}/>
                <button className={style.buyButton}
                        onClick={buyTicket}>
                  {languageSrc.buyTicket[langProps.language]}
                </button>
              </Col>
            </Row>

          </Container>
=======
          {particle}
          <div className={"mainContainer"}>
            <div className={"pageHeaderRow"}>
              <div className={"pageHeader"}>
                {languageSrc.buyTicket[langProps.language]}
              </div>
              <div>
                <span className={style.headerBandName}>{data[0] && data[0].band}</span>
              </div>
            </div>

            <div className={style.dataRow}>
              <div className={style.hallMap}>
                <svg viewBox={"0 0 800 556"} className={style.sectorSVG} id="svgCanvas">
                  {
                    data.map((item, index) => (
                        <path key={index}
                              className={`${style.sectorPart} ${(item.numOfSeats - item.tickCount) === 0 && 'noSeatsSector'}`}
                              d={item.svgCors}
                              id={item.name}
                              onClick={setSectorDesc}
                              onDoubleClick={setSectorDesc}/>
                      )
                    )
                  }
                </svg>
                <img src={data[0] && data[0].img}
                     className={style.hallImg} alt={"Hall map image"}/>
              </div>
              <div className={style.sectorDescription}>

                {sector && (
                  <>
                    <div className={style.description}>
                      <h1
                        className={style.sectorNameBlock}>{languageSrc.sector[langProps.language]} : <span>{sector.name}</span>
                      </h1>
                      <hr/>
                      <div
                        className={style.featuresBlock}>{languageSrc.features[langProps.language]} : {sector.features}</div>
                    </div>
                    <div className={style.allowedSeats}>
                      {
                        sector.numOfSeats - sector.tickCount !== 0 ?
                          (<>{languageSrc.freeNumberOfSeats[langProps.language]} : {tickCount}</>) :
                          (<span className={"redColor"}>{languageSrc.noAvailibleSeats[langProps.language]}</span>)
                      }
                    </div>
                  </>)
                }
                {
                  (!sector && concert) && (
                    <div className={style.description}>

                      <div className={style.infoColData}>
                        <div className={style.emptyBlock}>
                            <span className={style.pleaseText}>
                              {languageSrc.pleaseSelectSector[langProps.language]}
                            </span>
                        </div>
                        <div className={style.dataTextBlock}>
                          <div>
                            <span className={style.leftFloat}>{languageSrc.place[langProps.language]}:</span>
                            <b>{concert.place}</b>
                          </div>
                          <div>
                            <span className={style.leftFloat}>{languageSrc.date[langProps.language]}:</span>
                            <b>
                              {`${day || ""} ${month || ""} ${year || ""}`}
                            </b>
                          </div>
                          <div>
                            <span className={style.leftFloat}>{languageSrc.time[langProps.language]}:</span>
                            <b>
                              {`${hour || ""}:${minute || ""}`}
                            </b>
                          </div>
                        </div>
                      </div>
                    </div>
                  )
                }
                <div className={style.buttons}>
                  <button className={style.backButton} onClick={back}>{languageSrc.back[langProps.language]}</button>
                  <span className={style.costSpan}>{sector && (sector.cost * count).toFixed(2) + '$'}</span>

<<<<<<< HEAD
                  {sector && (sector.numOfSeats - sector.tickCount !== 0) && (<><input type="number" min={1} max={max}
=======
                  {sector && (sector.numOfSeats - sector.tickCount !== 0) && isLogined && (<><input type="number" min={1} max={max}
>>>>>>> cf3d048... small update, start making eMail confirming
                                                                                       value={count}
                                                                                       onChange={countChange}
                                                                                       className={style.counter}/>
                    <button className={style.buyButton}
                            onClick={buyTicket}
                    >{languageSrc.buyTicket[langProps.language]}
                    </button>
                  </>)}


                </div>
              </div>
            </div>
          </div>
>>>>>>> d548b86... buy ticket functional finished
        </>)
      }
      }
    </LanguageContext.Consumer>
<<<<<<< HEAD
)

=======
  )
}
>>>>>>> d548b86... buy ticket functional finished
Ticket.propTypes = {
  concert: PropTypes.object,
  back: PropTypes.func,
  data: PropTypes.object,
  buyTicket: PropTypes.func,
<<<<<<< HEAD
=======
  sector: PropTypes.object,
  setSectorDesc: PropTypes.func,
  count: PropTypes.number,
  countChange: PropTypes.func,
  max: PropTypes.number,
<<<<<<< HEAD
>>>>>>> d548b86... buy ticket functional finished
=======
  isLoggined: PropTypes.bool,
>>>>>>> 33800b6... Account page made + buy ticket features like a decline buying tickets for non-authed users
}

export default Ticket;