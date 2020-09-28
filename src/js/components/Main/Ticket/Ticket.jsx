import React, {useMemo} from 'react';
import PropTypes from "prop-types"

import style from "./Ticket.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";
import Particle from "../../CommonData/Paricles/Particles.jsx";

import "./Ticket.css"

const Ticket = ({data, back, sector, setSectorDesc, buyTicket, count, countChange, max, isLoggined}) => {
  const particle = useMemo(() => (<Particle/>), [])
  let day, month, year, hour, minute, concert;
  concert = data[0];
  console.log(data)
  return (
    <LanguageContext.Consumer>
      {langProps => {
        if (concert) {
          day = new Date(concert.date).getDate() + 1;
          month = languageSrc.months[new Date(concert.date).getMonth()][langProps.language];
          year = new Date(concert.date).getFullYear();
          hour = String(new Date(concert.date).getHours()).padStart(2, '0');
          minute = String(new Date(concert.date).getMinutes()).padStart(2, '0');
        }
        return (<>
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
                          (<>{languageSrc.freeNumberOfSeats[langProps.language]} : {sector.numOfSeats - sector.tickCount}</>) :
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

                  {sector && (sector.numOfSeats - sector.tickCount !== 0) && (<><input type="number" min={1} max={max}
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
        </>)
      }
      }
    </LanguageContext.Consumer>
  )
}
Ticket.propTypes = {
  concert: PropTypes.object,
  back: PropTypes.func,
  data: PropTypes.object,
  buyTicket: PropTypes.func,
  sector: PropTypes.object,
  setSectorDesc: PropTypes.func,
  count: PropTypes.number,
  countChange: PropTypes.func,
  max: PropTypes.number,
  isLoggined: PropTypes.bool,
}

export default Ticket;