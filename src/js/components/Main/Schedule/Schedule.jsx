import React from 'react'
import PropTypes from 'prop-types';
import languageSrc from "../../../language";
import {LanguageContext} from "../../Contexts/LanguageContext";
import {Col, Container, Row} from "react-bootstrap";

import style from "./Schedule.module.css";
import {Link} from "react-router-dom";

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
              <Row className={"pageHeaderRow"}>
                <div className={"pageHeader"}>
                  {languageSrc.schedule[langProps.language]}
                </div>
              </Row>
              <Row className={style.dataRow}>
                <div className={style.yearContainer}>

                  <div className={style.yearData}>
                    <div className={style.monthContainer}>1</div>
                    <div className={style.monthContainer}>2</div>
                    <div className={style.monthContainer}>3</div>
                    <div className={style.monthContainer}>4</div>
                    <div className={style.monthContainer}>5</div>
                  </div>
                  <div className={style.year}>
                    {2020}
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
