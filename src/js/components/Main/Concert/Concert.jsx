import React, {useMemo} from 'react';
import PropTypes from "prop-types"

import style from "./Concert.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";

import Particle from "../../CommonData/Paricles/Particles.jsx";

const Concert = ({concert, back, buy}) => {
  document.getElementsByTagName("title")[0].innerText = "Concert";

  const particle = useMemo(() => (<Particle/>
  ), [])
  return (
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
                  <div className={style.oneRow}>
                    <span>{languageSrc.band[langProps.language]}:</span>
                    <span>
                    {concert.band}
                  </span>
                  </div>
                  <div className={style.oneRow}>
                    <span>{languageSrc.place[langProps.language]}:</span>
                    <span>
                    {concert.place}
                  </span>
                  </div>
                  <div className={style.oneRow}>
                    <span>{languageSrc.date[langProps.language]}:</span>
                    <span>
                    {`${day || ""} ${month || ""} ${year || ""}`}
                  </span>
                  </div>
                  <div className={style.oneRow}>
                    <span>{languageSrc.time[langProps.language]}:</span>
                    <span>
                    {`${hour || ""}:${minute || ""}`}
                  </span>
                  </div>
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