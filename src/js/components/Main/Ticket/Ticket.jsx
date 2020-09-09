import React from 'react';
import PropTypes from "prop-types"
import {Container, Row, Col} from "react-bootstrap"

import style from "./Ticket.module.css"
import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";


const Ticket = ({data, back, currentSectorDesc, setSectorDesc,buyTicket, count, countChange}) => (
    <LanguageContext.Consumer>
        {langProps => {
            return (<>
            <Container className={style.mainContainer}>
                <Row className = {"headerRow"}>
                    <Col className={style.centre}><h1>{languageSrc.buyTicket[langProps.language]}</h1></Col>
                </Row>
                <Row className={style.dataRow}>
                    <Col className={style.sectorColumn}>
                        {
                            data[0] && data.map((item)=>{
                                return(
                                    <Container className={style.sectorBlock} onClick={()=>{setSectorDesc(item.id)}}>
                                        <Row>
                                            <Col></Col>
                                            <Col className={style.sectorName}>{item.name}</Col>
                                            <Col className={style.sectorCost}>{item.cost}$</Col>
                                        </Row>
                                    </Container>)
                            })
                        }
                    </Col>
                    <Col className={style.centre}>
                        <h2>Features</h2>
                        {currentSectorDesc && currentSectorDesc.features}
                        <h2>Vip Features</h2>
                        {currentSectorDesc && currentSectorDesc.vipFeatures}

                    </Col>
                </Row>
                <Row className={style.centre}>
                    <Col><button className={style.buyButton} onClick={back}>{languageSrc.back[langProps.language]}</button></Col>
                    <Col/>
                    <Col><input type="number" min={1} max = {12} value={count} onChange={countChange} className = {style.counter}></input><button className={style.buyButton} onClick={buyTicket}>{languageSrc.buyTicket[langProps.language]}</button></Col>
                </Row>

            </Container>
            </>)
        }
        }
    </LanguageContext.Consumer>
)

Ticket.propTypes = {
    concert: PropTypes.object,
    back: PropTypes.func,
    data: PropTypes.object,
    buyTicket: PropTypes.func,
}

export default Ticket;