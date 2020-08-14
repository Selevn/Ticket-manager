import React from 'react'
import PropTypes from 'prop-types';
import languageSrc from "../../../language";
import {LanguageContext} from "../../Contexts/LanguageContext";
import {Col, Container, Row} from "react-bootstrap";

import style from "./Schedule.module.css";

const Schedule = ({concerts}) => (
    <LanguageContext.Consumer>
      {langProps => (
          <Container>
            <Row className={style.headerRow}>
              <Col className={style.header}>
                <h1>{languageSrc.schedule[langProps.language]}</h1>
                <table>
                  <thead>

                  <tr>
                    {["_none", "band", "place", "date"].map((item, i) =>
                        (<th className={style.tableTh} key={i}>{languageSrc[item][langProps.language]}</th>)
                    )}
                  </tr>
                  </thead>
                  <tbody>

                  {concerts.map((item, i) => {
                    let date = new Date(item.date);
                    return (
                        <tr key={i + 5 * i + 1}>
                          <td className={style.tableTd} key={i + 1 * i + 1}><img className={style.tableImage}
                                                                                 src={item.imgSrc}/></td>
                          <td className={style.tableTd} key={i + 2 * i + 1}>{item.band}</td>
                          <td className={style.tableTd} key={i + 3 * i + 1}>{item.place}</td>
                          <td className={style.tableTd} key={i + 4 * i + 1}>
                            {String(date.getDate()).padStart(2, '0')}.{String(date.getMonth() + 1).padStart(2, '0')}.{date.getFullYear()}
                          </td>
                        </tr>)
                  })
                  }

                  </tbody>
                </table>
              </Col>
            </Row>
          </Container>
      )}
    </LanguageContext.Consumer>
)

Schedule.propTypes = {
  concerts: PropTypes.array,
}

export default Schedule;