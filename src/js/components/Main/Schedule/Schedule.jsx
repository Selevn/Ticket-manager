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
            <tr className={style.yearTr}>
              <td/>
              <td/>
              <td/>
              <td className={style.yearTd}>{new Date(item.date).getFullYear()}</td>
            </tr>)
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
            <Container>
              <Row className={style.headerRow}>
                <Col className={style.header}>
                  <h1>{languageSrc.schedule[langProps.language]}</h1>
                  <table className={style.table}>
                    <thead>
                    </thead>
                    <tbody>
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

                    </tbody>
                  </table>
                </Col>
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
