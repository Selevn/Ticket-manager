import React from 'react';
import PropTypes from "prop-types"
import {Container, Row, Col} from "react-bootstrap"

import style from "./Concert.module.css"


function Concert(props) {
  return (
      <div>
        <Container className={style.mainContainer}>
          <Row>
            <Col sm={12} xs={12} md={7} lg={7} className={style.imageBlock}>
              <img className={style.titleImage}
                   src={props.concert.imgSrc}/>
            </Col>
            <Col>
              <div className={style.infoCol}>
                <span className={style.leftFloat}>Band:</span> <b className={style.rightFloat}>{props.concert.band}</b>
                <br/>
                <span className={style.leftFloat}>Place:</span> <b
                  className={style.rightFloat}>{props.concert.place}</b>
                <br/>
                <span className={style.leftFloat}>Date:</span> <b className={style.rightFloat}>{props.concert.date}</b>
                <br/>
              </div>
            </Col>
          </Row>
          <Row className={style.buttonPlacement}>


            <Col sm={3} lg={3} md={3} xs={3} xl={3} className={style.buttonColumn}>
              <button className={style.backButton} onClick={props.back}>Back</button>
            </Col>
            <Col>

            </Col>
            <Col sm={3} lg={3} md={3} xs={3} xl={3}>
              <button className={style.buyButton}>Buy ticket</button>
            </Col>


          </Row>
        </Container>

      </div>
  )
}

Concert.propTypes = {
  concert: PropTypes.object,
  back: PropTypes.func,
}

export default Concert;