import React, {useMemo} from 'react';
import PropTypes from "prop-types"

import style from "./Ticket.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";
import languagePack from "../../../language.js";
import Particle from "../../CommonData/Paricles/Particles.jsx";


const Ticket = ({data, back, sector, setSectorDesc, buyTicket, count, countChange}) => {
  const particle = useMemo(() => (<Particle/>), [])
  console.log(sector)
  return (
    <LanguageContext.Consumer>
      {langProps => {

        return (<>
          {particle}
          <div className={"mainContainer"}>
            <div className={"pageHeaderRow"}>
              <div className={"pageHeader"}>
                {languageSrc.buyTicket[langProps.language]}
              </div>
            </div>

            <div className={style.dataRow}>
              <div className={style.hallMap}>
                <svg viewBox={"0 0 800 556"} className={style.sectorSVG}>
                  {
                    data.map(item => (
                        <path className={style.sectorPart} d={item.svgCors} id={item.name} onClick={setSectorDesc}></path>
                      )
                    )
                  }
                </svg>
                <img src={data[0] && data[0].img}
                     className={style.hallImg}/>
              </div>
              <div className={style.sectorDescription}>
                <div className={style.description}>
                  <h1>{sector && languageSrc.sector[langProps.language]+': '+sector.name}</h1>
                  {sector && languageSrc.features[langProps.language]+': '+sector.features}
                  {sector && sector.cost+'$'}
                </div>
                <div className={style.buttons}>
                  <div>
                    <button className={style.buyButton} onClick={back}>{languageSrc.back[langProps.language]}</button>
                  </div>
                  <div>
                    <input type="number" min={1} max={12} value={count} onChange={countChange}
                           className={style.counter}/>
                    <button className={style.buyButton}
                            onClick={buyTicket}>
                      {languageSrc.buyTicket[langProps.language]}
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className={style.centre}>

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
}

export default Ticket;