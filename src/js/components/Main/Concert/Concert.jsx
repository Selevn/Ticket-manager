import React from 'react';
import PropTypes from "prop-types"
import {Container, Row, Col} from "react-bootstrap"

import style from "./Concert.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";


const Concert = ({concert, back}) => (
    <LanguageContext.Consumer>
<<<<<<< HEAD
      {langProps=>{
=======
      {langProps => {

>>>>>>> 4a769e8... Home soon bugFix, start make Ticket page
        let day, month, year;
        if(concert.hasOwnProperty("id"))
        {
          day = new Date(concert.date).getDate()+1;
          month = languageSrc.months[new Date(concert.date).getMonth()][langProps.language];
          year = new Date(concert.date).getFullYear();
        }

        return(<div>
          <Container className={style.mainContainer}>
            <Row>
              <Col sm={12} xs={12} md={7} lg={7} className={style.imageBlock}>
                <img className={style.titleImage}
                     src={concert.imgSrc}/>
              </Col>
              <Col>
                <div className={style.infoCol}>
                  <span className={style.leftFloat}>{languageSrc.band[langProps.language]}:</span> <b className={style.rightFloat}>{concert.band}</b>
                  <br/>
                  <span className={style.leftFloat}>{languageSrc.place[langProps.language]}:</span> <b
                    className={style.rightFloat}>{concert.place}</b>
                  <br/>
                  <span className={style.leftFloat}>{languageSrc.date[langProps.language]}:</span> <b className={style.rightFloat}>
                  {`${day||""} ${month||""} ${year||""}`}
                </b>
                  <br/>
                </div>
              </Col>
            </Row>
            <Row className={style.buttonPlacement}>


              <Col sm={3} lg={3} md={3} xs={3} xl={3} className={style.buttonColumn}>
                <button className={style.backButton} onClick={back}>{languageSrc.back[langProps.language]}</button>
              </Col>
              <Col>

              </Col>
              <Col sm={3} lg={3} md={3} xs={3} xl={3}>
                <button className={style.buyButton}>{languageSrc.ticket[langProps.language]}</button>
              </Col>
            </Row>
          </Container>

        </div>)}
      }
    </LanguageContext.Consumer>
)

Concert.propTypes = {
  concert: PropTypes.object,
  back: PropTypes.func,
}

export default Concert;