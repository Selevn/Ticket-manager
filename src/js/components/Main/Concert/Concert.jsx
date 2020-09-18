import React from 'react';
import PropTypes from "prop-types"
import {Container, Row, Col} from "react-bootstrap"

import style from "./Concert.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";


const Concert = ({concert, back, buy}) => (
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
                    {/*<div className={style.buttonPlacement}>


              <div className={style.buttonColumn}>
                <button className={style.backButton} onClick={back}>{languageSrc.back[langProps.language]}</button>
              </div>
              <div>
                <button className={style.buyButton} onClick={buy}>{languageSrc.ticket[langProps.language]}</button>
              </div>
            </div>*/}
                </div>

            </>)
        }
        }
    </LanguageContext.Consumer>
)

Concert.propTypes = {
    concert: PropTypes.object,
    back: PropTypes.func,
    buy: PropTypes.func,
}

export default Concert;