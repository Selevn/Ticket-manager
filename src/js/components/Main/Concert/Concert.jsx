import React, {useMemo} from 'react';
import PropTypes from "prop-types"

import style from "./Concert.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";

import Particle from "../../CommonData/Paricles/Particles.jsx";
const Concert = ({concert, back, buy}) => {
  const particle = useMemo(()=>(<Particle/>
  ),[])
  return(
    <LanguageContext.Consumer>
      {langProps => {
        if (!concert) {
          return (<></>)
        }
        let day, month, year, hour, minute;
        if (Object.prototype.hasOwnProperty.call(concert, "id")/*concert.hasOwnProperty("id")*/) {
          day = new Date(concert.date).getDate() + 1;
          month = languageSrc.months[new Date(concert.date).getMonth()][langProps.language];
          year = new Date(concert.date).getFullYear();
          hour = String(new Date(concert.date).getHours()).padStart(2, '0');
          minute = String(new Date(concert.date).getMinutes()).padStart(2, '0');

        }
        return (<>
          {particle}
          <div className={style.mainContainer}>

            <div className={style.imageBlock}>
              <img className={style.titleImage}
                   src={concert.imgSrc} alt={"Concert image"}/>
            </div>
            <div className={style.dataBlock}>
              <div className={style.infoCol}>
                <div className={style.infoColData}>
                  <span className={style.leftFloat}>{languageSrc.band[langProps.language]}:</span> <b
                  className={style.rightFloat}>{concert.band}</b>
                  <br/>
                  <span className={style.leftFloat}>{languageSrc.place[langProps.language]}:</span> <b
                  className={style.rightFloat}>{concert.place}</b>
                  <br/>
                  <span className={style.leftFloat}>{languageSrc.date[langProps.language]}:</span> <b
                  className={style.rightFloat}>
                  {`${day || ""} ${month || ""} ${year || ""}`}
                </b>
                  <br/>
                  <span className={style.leftFloat}>{languageSrc.time[langProps.language]}:</span> <b
                  className={style.rightFloat}>
                  {`${hour || ""}:${minute || ""}`}
                </b>
                  <br/>
                </div>
              </div>
              <div className={style.buttonPlacement}>
                <button className={style.backButton}
                        onClick={back}
                        tabIndex={0}>{languageSrc.back[langProps.language]}
                        </button>
                <button className={style.buyButton}
                        onClick={buy}
                        tabIndex={0}>{languageSrc.ticket[langProps.language]}</button>
              </div>
            </div>
          </div>
        </>)
      }
      }
    </LanguageContext.Consumer>
  )
}

Concert.propTypes = {
  concert: PropTypes.object,
  back: PropTypes.func,
  buy: PropTypes.func,
}

export default Concert;