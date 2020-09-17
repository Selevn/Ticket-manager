import React from 'react'
import PropTypes from 'prop-types';
import languageSrc from "../../../language";
import {LanguageContext} from "../../Contexts/LanguageContext";
import {Col, Container, Row} from "react-bootstrap";

import style from "./Schedule.module.css";
import {Link} from "react-router-dom";
import Particles from "react-particles-js";

const Schedule = ({concerts}) => (
    <LanguageContext.Consumer>
      {langProps => {
        let data = {};
        concerts = concerts.map(item => ({...item, date: new Date(item.date)}));
        let years = new Set(concerts.map((item) => (item.date.getFullYear())));

        for (let year of years) {
          let thisYearConcerts = concerts.filte((item)=>(item.date.getFullYear() === year))
          Array.isArray(data[year])?data[year].push(thisYearConcerts):data[year]=thisYearConcerts;
        }
        console.log(years)
        /*concerts.forEach((item)=>{

        })
*/
        /* let years = [];
         let i = 0;
         let tmpConcerts = concerts.map(item=>({...item, date:new Date(item.date)}))
         var result = tmpConcerts.reduce((prev, current)=>{
             if((prev && prev.date.getFullYear())||0 !== current.date.getFullYear())
             {
                 years[i++] = 0;
             }
         });*/
        //mini additional components
        const ConcertItem = ({item}) => {
          let date = new Date(item.date);
          return (
              <Link to={"concert/" + item.id}>
                <div className={style.concertItem}>
                  <div className={style.cardImageDiv}>
                    <img src={item.imgSrc} className={style.cardImage}/>
                  </div>
                  <div className={style.cardInfoDiv}>
                    <div className={style.concertItemBand}> {item.band}</div>
                    <div className={style.concertItemPlace}> {item.place}
                    </div>
                  </div>
                  <div
                      className={style.cardFooter}>{languageSrc.months[date.getMonth()][langProps.language] + " " + date.getDate()}</div>
                </div>
              </Link>
          )
        }

        const MonthRow = ({concerts = {}, season = "autumn"}) => {
          if (season == "autumn" || season == "spring")
            return (<div className={style.monthContainer + " " + style[season + "Data"]}>
              <div className={style.monthContainerName + " " + style[season + "Name"]}>
                <span>January</span>
              </div>
              <div className={style.monthContainerData}>
                {
                  concerts.map((item, index) =>
                      (<ConcertItem item={item} key={index}/>)
                  )
                }
              </div>
            </div>)
          else
            return (
                <div className={style.monthContainer + " " + style[season + "Data"]}>
                  <div className={style.monthContainerData}>
                    {
                      concerts.map((item, index) =>
                          (<ConcertItem item={item} key={index}/>)
                      )
                    }
                  </div>
                  <div className={style.monthContainerName + " " + style[season + "Name"]}>
                    <span>January</span>
                  </div>
                </div>)
        }

        const YearItem = (year) => {
          return (
              <div className={style.year}>
                {year.year}
              </div>
          )
        }


        return (
            <div className={"mainContainer"}>
              <div className={"pageHeaderRow " + style.pageHeaderSchedule}>
                <div className={"pageHeader"}>
                  {languageSrc.schedule[langProps.language]}
                </div>
              </div>
              <div className={style.dataRow}>
                {/*<YearItem year={2020}/>
                          <MonthRow concerts={concerts} season={"autumn"}/>*/}
                {concerts.map((item) => {
                  let date = new Date(item.date);

                  const notNewYear = years[date.getFullYear()] || false;
                  !notNewYear && (years[date.getFullYear()] = []);//mark with array flag on faced with

                  const notNewMonth = years[date.getFullYear()][date.getMonth()] || false;
                  !notNewMonth && (years[date.getFullYear()][date.getMonth()] = true);//mark with true flag on faced with


                  return notNewYear ?
                      notNewMonth ?
                          <BaseRow item={item}/>
                          : <>
                            <MonthRow item={item}/>
                            <BaseRow item={item}/>
                          </>
                      : <>
                        <YearRow item={item}/>
                        <MonthRow item={item}/>
                        <BaseRow item={item}/>
                      </>
                })}
              </div>
            </div>
        )
      }
      }
    </LanguageContext.Consumer>
)

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
