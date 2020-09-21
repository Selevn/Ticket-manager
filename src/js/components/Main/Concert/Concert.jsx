import React, {useMemo} from 'react';
import PropTypes from "prop-types"

import style from "./Concert.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";

import Particles from "react-particles-js";

const Concert = ({concert, back, buy}) => {
  const particle = useMemo(()=>(<Particles
      params={{
        particles: {
          number: {
            value: 30,
            density:{
              enable:true,
              value_area: 500,
            },
          },
          color: {
            value: "#000000"
          },
          opacity: {
            value: 0.5,
            random: true
          },
          size:
            {value: 2},
          line_linked: {
            enable:true,
            distance:150,
            color:"#000",
          },
          move:
            {
              speed:1
            }
        }
      }}
      //TODO: РАСТЯНУТЬ КАНВАС ПО ВЫСОТЕ!
      canvasClassName={style.backgroundPartickle}
      width = {"100%"}
      height = {"100%"}/>
  ),[])
  return(
    <LanguageContext.Consumer>
      {langProps => {
        if (!concert) {
          return (<></>)
        }
        let day, month, year, hour, minute;
        if (concert.hasOwnProperty("id")) {
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
                   src={concert.imgSrc}/>
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
                        onClick={back}>{languageSrc.back[langProps.language]}</button>
                <button className={style.buyButton}
                        onClick={buy}>{languageSrc.ticket[langProps.language]}</button>
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