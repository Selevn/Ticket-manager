import React from 'react'
import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import style from "./Home.module.css"
import "./Home.css"

import {Container, Row, Col} from "react-bootstrap";

import PropTypes from "prop-types"

const Home = props => {
  return (<div>
    <LanguageContext.Consumer>
      {langProps => (
          <div>
            <Container>
              <Row>
                <Col sm={3} xs={3} md={3} lg={3} xl={3}>

                </Col>
                <Col className={style.searchColumn}>
                  <input placeholder={languageSrc.search[langProps.language]} type="text" value={props.searchText}
                         onChange={props.onInputChange}/>
                  <div className={style.tip}>
                    <ul className={style.tipUl}>
                      {props.concerts.map((item, index) => <li className={style.tipLi} key={index}>{item.band}</li>)}
                    </ul>
                  </div>
                </Col>
                <Col sm={3} xs={3} md={3} lg={3} xl={3}>

                </Col>
              </Row>
            </Container>

          </div>
      )}
    </LanguageContext.Consumer>
  </div>)
}

Home.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func
}

export default Home;