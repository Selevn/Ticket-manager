import React from 'react';
import PropTypes from "prop-types"
import {Container, Row, Col} from "react-bootstrap"

import style from "./Ticket.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";


const Ticket = ({concert, back}) => (
    <LanguageContext.Consumer>
        {langProps => {
            return (<div>
                <Container className={style.mainContainer}>
                    <Row>
                        <Col sm={12} xs={12} md={7} lg={7} className={style.imageBlock}>
                            <img className={style.titleImage}
                                 src={concert.imgSrc}/>
                        </Col>
                        <Col>
                            <div className={style.infoCol}>
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

            </div>)
        }
        }
    </LanguageContext.Consumer>
)

Ticket.propTypes = {
    concert: PropTypes.object,
    back: PropTypes.func,
}

export default Ticket;