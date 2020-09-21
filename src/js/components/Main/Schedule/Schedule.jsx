import React, {useMemo} from 'react'
import PropTypes from 'prop-types';
import languageSrc from "../../../language";
import {LanguageContext} from "../../Contexts/LanguageContext";
import {Col, Container, Row} from "react-bootstrap";

import style from "./Schedule.module.css";
import {Link} from "react-router-dom";
import Particles from "react-particles-js";
import Particle from "../../CommonData/Paricles/Particles.jsx";
import ConcertItem from "../../CommonData/ConcertItem.jsx"
const Schedule = ({concerts}) => {
  const particle = useMemo(() => (<Particle/>), [])
  return (
    <LanguageContext.Consumer>
      {langProps => {
        let data = [];
        concerts = concerts.map(item => ({...item, date: new Date(item.date)})).map(item => {
          let season = (item) => {
            switch (item.date.getMonth()) {
              case 0:
                return "winter"
              case 1:
                return "winter"
              case 2:
                return "spring"
              case 3:
                return "spring"
              case 4:
                return "spring"
              case 5:
                return "summer"
              case 6:
                return "summer"
              case 7:
                return "summer"
              case 8:
                return "autumn"
              case 9:
                return "autumn"
              case 10:
                return "autumn"
              case 11:
                return "winter"
            }
          }
          return {...item, season: season(item)}
        })
        for (let i = 0; i < concerts.length; i++) {
          if (data.indexOf(concerts[i].date.getFullYear()) === -1) {
            data.push(concerts[i].date.getFullYear())
            data.push({type: "month", data: concerts[i].date.getMonth(), arr: []})
          }
          if (concerts[i].date.getMonth() === data[data.length - 1].data) {
            data[data.length - 1].arr.push(concerts[i])
          } else {
            data.push({type: "month", data: concerts[i].date.getMonth(), arr: []})
            data[data.length - 1].arr.push(concerts[i])
          }
        }


        const MonthRow = ({concerts}) => {
          if (concerts.length !== 0) {
            let season = concerts[0].season;
            if (season == "autumn" || season == "spring")
              return (
                <div className={style.monthContainer + " " + style[season + "Data"]}>
                  {particle}
                  <div className={style.monthContainerName + " " + style[season + "Name"]}>
                    <span>{languageSrc.months[concerts[0].date.getMonth()][langProps.language]}</span>
                  </div>
                  <div className={style.monthContainerData}>
                    {
                      concerts.map((item, index) =>
                        (<ConcertItem item={item} langProps={langProps} key={index}/>)
                      )
                    }
                  </div>
                </div>)
            else
              return (
                <div className={style.monthContainer + " " + style[season + "Data"]}>
                  {particle}
                  <div className={style.monthContainerData}>
                    {
                      concerts.map((item, index) =>
                        (<ConcertItem item={item} langProps={langProps} key={index}/>)
                      )
                    }
                  </div>
                  <div className={style.monthContainerName + " " + style[season + "Name"]}>
                    <span>{languageSrc.months[concerts[0].date.getMonth()][langProps.language]}</span>
                  </div>
                </div>)
          } else
            return (<></>)
        }
        const YearItem = (year) => {
          return (
            <div className={style.year}>
              {year.year}
            </div>
          )
        }

        return (
          <>

            <div className={"mainContainer"}>
              {particle}
              <div className={"pageHeaderRow " + style.pageHeaderSchedule}>
                <div className={"pageHeader"}>
                  {languageSrc.schedule[langProps.language]}
                </div>
              </div>
              <div className={style.dataRow}>
                {
                  data.map((item) => {
                    if (typeof (item) === "number")
                      return (<YearItem year={item}/>)
                    else
                      return (<MonthRow concerts={item.arr}/>)
                  })

                }
              </div>
            </div>

          </>
        )
      }
      }
    </LanguageContext.Consumer>
  )
}

/*<div className={style.yearData}>
                                <div className={style.yearSeason} id={style.seasonWinter}>
                                    <div className={style.seasonData}>
                                        {
                                            concerts.map((item, index) =>
                                                (<ConcertItem item={item} key={index}/>)
                                            )
                                        }
                                    </div>
                                    <div className={style.seasonName}>
                                        <span className={style.seasonNameSpan}>Winter</span>
                                    </div>
                                </div>
                                <div className={style.yearSeason} id={style.seasonSpring}>
                                    <div className={style.seasonName}>
                                        <span className={style.seasonNameSpan}>Spring</span>
                                    </div>
                                    <div className={style.seasonData}>
                                        {
                                            concerts.map((item, index) =>
                                                (<ConcertItem item={item} key={index}/>)
                                            )
                                        }
                                    </div>
                                </div>
                                <div className={style.yearSeason} id={style.seasonSummer}>
                                    <div className={style.seasonData}>

                                    </div>
                                    <div className={style.seasonName}>
                                        <span className={style.seasonNameSpan}>Summer</span>
                                    </div>
                                </div>
                                <div className={style.yearSeason} id={style.seasonAutumn}>
                                    <div className={style.seasonName}>
                                        <span className={style.seasonNameSpan}>Autumn</span>
                                    </div>
                                    <div className={style.seasonData}>
                                    </div>
                                </div>
                            </div>
*/
Schedule.propTypes = {
  concerts: PropTypes.array,
  getConcerts: PropTypes.func,
}

export default Schedule;
