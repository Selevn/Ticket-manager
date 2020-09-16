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

        let years = {};
        //mini additional components

        const YearRow = ({item}) => (
            <div className={style.year}>
              {new Date(item.date).getFullYear()}
            </div>
        )
        YearRow.propTypes = {
          item: PropTypes.object
        }

        const MonthRow = ({item}) => (
            <tr className={style.monthTr}>
              <td className={style.monthTd}>{languageSrc.months[new Date(item.date).getMonth()][langProps.language]}</td>
              <td/>
              <td/>
              <td/>

            </tr>
        )
        MonthRow.propTypes = {
          item: PropTypes.object
        }
        const ConcertItem = ({item}) => {
          console.log(item)
          return(
              <div className={style.concertItem}>
                <div className = {style.cardImageDiv}>
                  <img src = {item.imgSrc} className = {style.cardImage}/>
                </div>
                <div className = {style.cardInfoDiv}>
                  {languageSrc.band[langProps.language]} :
                  <b> {item.band}</b>
                  <br/>
                  {languageSrc.place[langProps.language]} :
                  <b> {item.place}</b>
                  <br/>
                  {languageSrc.date[langProps.language]} :
                  <b> {item.date}</b>
                  <br/>
                </div>
              </div>
          )
        }

        const BaseRow = ({item}) => (
            <tr key={item.id} className={style.baseRowTr}>
              <Link to={"/concert/" + item.id}>
                <td className={style.tableTd}><img className={style.tableImage} src={item.imgSrc}/></td>
                <td className={style.tableTd}>{item.band}</td>
                <td className={style.tableTd}>{item.place}</td>
                <td className={style.tableTd}>
                  {languageSrc.days[new Date(item.date).getDay()][langProps.language] + " " + String(new Date(item.date).getDate()).padStart(2, '')}
                </td>
              </Link>
            </tr>)
        BaseRow.propTypes = {
          item: PropTypes.object
        }


        return (
            <Container className={"mainContainer"}>
              <Row className={"pageHeaderRow " + style.pageHeaderSchedule}>
                <div className={"pageHeader"}>
                  {languageSrc.schedule[langProps.language]}
                </div>
              </Row>
              <Row className={style.dataRow}>
                <div className={style.yearContainer}>
                  <div className={style.year}>
                    {2020}
                  </div>
                  <div className={style.yearData}>
                    <div className={style.yearSeason} id={style.seasonWinter}>
                      <div className={style.seasonData}>
                        {
                          concerts.map((item,index)=>
                            (<ConcertItem item={item} key={index}/>)
                          )
                        }
                      </div>

                      <div className={style.seasonName}>
                        <span>Winter</span>
                      </div>
                    </div>
                    <div className={style.yearSeason} id={style.seasonSpring}>
                      <div className={style.seasonName}>
                        <span>Spring</span>
                      </div>
                      <div className={style.seasonData}>

                      </div>


                    </div>
                    <div className={style.yearSeason} id={style.seasonSummer}>
                      <div className={style.seasonData}>

                      </div>
                      <div className={style.seasonName}>
                        <span>Summer</span>
                      </div>
                    </div>
                    <div className={style.yearSeason} id={style.seasonAutumn}>
                      <div className={style.seasonName}>
                        <span>Autumn</span>
                      </div>
                      <div className={style.seasonData}>

                      </div>
                    </div>
                  </div>

                </div>
              </Row>
            </Container>
        )
      }
      }
    </LanguageContext.Consumer>
)

Schedule.propTypes = {
  concerts: PropTypes.array,
  getConcerts: PropTypes.func,
}

export default Schedule;
