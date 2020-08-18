import React from 'react'
import PropTypes from 'prop-types';
import languageSrc from "../../../language";
import {LanguageContext} from "../../Contexts/LanguageContext";
import {Col, Container, Row} from "react-bootstrap";

import style from "./Schedule.module.css";

const Schedule = ({concerts, getConcerts}) =>
    (
        <LanguageContext.Consumer>
          {langProps => {
            let years = {};
            getConcerts()
            return (
                <Container>
                  <Row className={style.headerRow}>
                    <Col className={style.header}>
                      <h1>{languageSrc.schedule[langProps.language]}</h1>
                      <table className={style.table}>
                        <thead>

                        {/*<tr >
                    {["_none", "band", "place", "date"].map((item, i) =>
                        (<th className={`${style.tableTh} ${style.tableHeaderTr}`} >{languageSrc[item][langProps.language]}</th>)
                    )}
                  </tr>*/}
                        </thead>
                        <tbody>
                        {concerts.map((item) => {
                          let date = new Date(item.date);

                          let YearRow = () => (
                              <tr className={style.yearTr}>
                                <td/>
                                <td/>
                                <td/>
                                <td className={style.yearTd}>{date.getFullYear()}</td>
                              </tr>)

                          let MonthRow = () => (
                              <tr className={style.monthTr}>
                                <td className={style.monthTd}>{languageSrc.months[date.getMonth()][langProps.language]}</td>
                                <td/>
                                <td/>
                                <td/>

                              </tr>
                          )

                          let BaseRow = () => (
                              <tr key={item.id} className={style.baseRowTr}>
                                <td className={style.tableTd}><img className={style.tableImage} src={item.imgSrc}/></td>
                                <td className={style.tableTd}>{item.band}</td>
                                <td className={style.tableTd}>{item.place}</td>
                                <td className={style.tableTd}>
                                  {languageSrc.days[date.getDay()][langProps.language] +" "+String(date.getDate()).padStart(2, '')}
                                </td>
                              </tr>)

                          if (years[date.getFullYear()]) {
                            if (years[date.getFullYear()][date.getMonth()]) {
                              return (<BaseRow/>)
                            } else {
                              years[date.getFullYear()][date.getMonth()]=true;
                              return (<>
                                <MonthRow/>
                                <BaseRow/>
                              </>)
                            }
                          } else {
                            years[date.getFullYear()]=[];
                            years[date.getFullYear()][date.getMonth()]=true;
                            return (<>
                              <YearRow/>
                              <MonthRow/>
                              <BaseRow/>
                            </>)
                          }

                        })}

                        </tbody>
                      </table>
                    </Col>
                  </Row>
                </Container>
            )
          }}
        </LanguageContext.Consumer>
    )

Schedule.propTypes = {
  concerts: PropTypes.array,
}

export default Schedule;