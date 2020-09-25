import React, {useMemo} from 'react';
import PropTypes from "prop-types"

import style from "./Ticket.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";
import Particle from "../../CommonData/Paricles/Particles.jsx";

import "./Ticket.css"

const Ticket = ({data, back, sector, setSectorDesc, buyTicket, count, countChange}) => {
  const particle = useMemo(() => (<Particle/>), [])
  let day, month, year, hour, minute, concert = data[0];

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
                              className={style.sectorPart}
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
                <div className={style.description}>
                  {sector && (<><h1
                    className={style.sectorNameBlock}>{languageSrc.sector[langProps.language]} : <span>{sector.name}</span>
                  </h1>
                    <hr/>
                    <div
                      className={style.featuresBlock}>{languageSrc.features[langProps.language]} : {sector.features}</div>
                  </>)
                  }
                  {
                    (!sector && concert) && (<>

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
                      </>
                    )
                  }
                </div>
                {sector && (<div className={style.allowedSeats}>
                  {languageSrc.freeNumberOfSeats[langProps.language]} : 400
                </div>)}
                <div className={style.buttons}>
                  <button className={style.backButton} onClick={back}>{languageSrc.back[langProps.language]}</button>
                  <span className={style.costSpan}>{sector && (sector.cost * count).toFixed(2) + '$'}</span>
                  <input type="number" min={1} max={12} value={count} onChange={countChange}
                         className={style.counter}/>
                  <button className={style.buyButton}
                          onClick={buyTicket}
                  >
                    {languageSrc.buyTicket[langProps.language]}
                  </button>
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

/*data[0] && data.map((item) => {
return (
<div className={style.sectorBlock} id={item.id + "sector"} onClick={(i) => {
setSectorDesc(item.id);
let collection = document.getElementsByClassName(style.active)
for (let i = 0; i < collection.length; i++) {
collection[i].classList.remove(style.active)
}
document.getElementById(item.id + "sector").classList.toggle(style.active)
}}>
<div>
<div></div>
<div className={style.sectorName}>{item.name}</div>
<div className={style.sectorCost}>{item.cost}$</div>
</div>
</div>)
})*/
Ticket.propTypes = {
  concert: PropTypes.object,
  back: PropTypes.func,
  data: PropTypes.object,
  buyTicket: PropTypes.func,
  sector: PropTypes.object,
}

export default Ticket;