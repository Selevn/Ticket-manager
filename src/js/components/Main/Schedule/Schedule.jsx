import React from 'react'
import PropTypes from 'prop-types';
import languageSrc from "../../../language";
import {LanguageContext} from "../../Contexts/LanguageContext";
import {Col, Container, Row} from "react-bootstrap";

import style from "./Schedule.module.css";

const Schedule = (props) =>
    (
    <LanguageContext.Consumer>
      {langProps => {



        /* let out = {};
         let years = [];
         for(let i =0; i< concerts.length; i++)
         {
           if(years.length===0 ||years[years.length-1]!==new Date(concerts[i].date).getFullYear())
             years.push(new Date(concerts[i].date).getFullYear());
         }

         years.forEach(
             (item,i)=>
             {out[item]=concerts.filter((item)=>(new Date(concerts[i].date).getFullYear()===item))}
             )*/
        console.log("props")
        console.log(props.getConcerts())
        console.log("concerts:")
        console.log(props.concertList)
        console.log("props")
        console.log(props)


          /*concerts.map((item, i) => {
            let date = new Date(item.date);
            return (

                <tr >
                  {before}
                  <td className={style.tableTd} ><img className={style.tableImage}
                                                      src={item.imgSrc}/></td>
                  <td className={style.tableTd} >{item.band}</td>
                  <td className={style.tableTd} >{item.place}</td>
                  <td className={style.tableTd} >
                    {String(date.getDate()).padStart(2, '0')}.{String(date.getMonth() + 1).padStart(2, '0')}.{date.getFullYear()}
                  </td>
                </tr>)
          })*/


        return(
          <Container>
            <Row className={style.headerRow}>
              <Col className={style.header}>
                <h1>{languageSrc.schedule[langProps.language]}</h1>
                <table>
                  <thead>

                  {/*<tr >
                    {["_none", "band", "place", "date"].map((item, i) =>
                        (<th className={`${style.tableTh} ${style.tableHeaderTr}`} >{languageSrc[item][langProps.language]}</th>)
                    )}
                  </tr>*/}
                  </thead>
                  <tbody>


                  </tbody>
                </table>
              </Col>
            </Row>
          </Container>
      )}}
    </LanguageContext.Consumer>
)

Schedule.propTypes = {
  concerts: PropTypes.array,
}

export default Schedule;