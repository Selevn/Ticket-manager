import React from 'react';

import {Container, Row, Col} from "react-bootstrap"

import { useParams } from "react-router";

import style from "./Concert.module.css"


import albumPicture from "../../../../img/Green_Day.png"
import herePic from "./Green_Day.png"

function Concert(props) {

  return (
      <div>
        <Container>
          <Row>
            <Col>
              <img src ={albumPicture} />
              <img src ={process.env.PUBLIC_URL + '/Green_Day.png'} />
            </Col>
            <Col>
              Band: <b>{props.concert.band}</b>
              <br/>
              Place: <b>{props.concert.place}</b>
              <br/>
              Date: <b>{props.concert.date}</b>
              <br/>
            </Col>
          </Row>
        </Container>

      </div>
  )

}

export default Concert;