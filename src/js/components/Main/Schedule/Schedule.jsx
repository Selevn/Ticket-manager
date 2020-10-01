import React, {useMemo} from 'react'
import PropTypes from 'prop-types';
import languageSrc from "../../../language";
import {LanguageContext} from "../../Contexts/LanguageContext";

import style from "./Schedule.module.css";
import Particle from "../../CommonData/Paricles/Particles.jsx";
import ConcertItem from "../../CommonData/ConcertItem.jsx"

const Schedule = ({concerts}) => {
  const particle = useMemo(() => (<Particle/>), [])
  return (
    <LanguageContext.Consumer>
      {langProps => {
        window.scrollTo(0,0) // при редиректе с home чтобы пользователь оказывался в начале страницы
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
            data.push({type: "month", data: concerts[i].date.getMonth(), year: concerts[i].date.getFullYear(), arr: []})
          }
          if (concerts[i].date.getMonth() === data[data.length - 1].data) {
            data[data.length - 1].arr.push(concerts[i])
          } else {
            data.push({type: "month", data: concerts[i].date.getMonth(), year: concerts[i].date.getFullYear(), arr: []})
            data[data.length - 1].arr.push(concerts[i])
          }
        }


        const MonthRow = ({concerts}) => {
          if (concerts.length !== 0) {
            let season = concerts[0].season;
            if (season === "autumn" || season === "spring")
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
        const YearItem = ({year, data}) => {
          return (
            <div className={style.yearStickyContainer}>
              <div className={style.year}>
                {year}
              </div>
              {data.filter(item => typeof (item) !== 'number').filter(item => item.year === year).map(item => {
                return (<><MonthRow concerts={item.arr}/></>)
              })}
            </div>
          )
        }
        YearItem.propTypes = {
          year: PropTypes.number,
          data: PropTypes.array,
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
                  data.filter(item => typeof (item) === 'number').map((item) => {
                    if (typeof (item) === "number")
                      return (<YearItem year={item} data={data}/>)
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
Schedule.propTypes = {
  concerts: PropTypes.array,
  getConcerts: PropTypes.func,
}

export default Schedule;
