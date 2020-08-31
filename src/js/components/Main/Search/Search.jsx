import React from 'react'

import {LanguageContext} from "../../Contexts/LanguageContext.js"
import languagePack from "../../../language.js";
import {Col, Container, Row} from "react-bootstrap";

import style from "./Search.module.css"

const Search = () => (<>
    <LanguageContext.Consumer>
        {langProps => (
            <Container>
                <Row>
                    <Col xs={12} sm={12} md={3} lg={2} xl={3}/>
                    <Col className={style.headerCol}><h3>{languagePack.search[langProps.language]}</h3></Col>
                    <Col xs={12} sm={12} md={3} lg={2} xl={3}/>
                </Row>
                <Row>
                    <Col xs={12} sm={12} md={3} lg={2} xl={3}/>
                    <Col className={style.searchCol}>
                        <form>
                            <Container>
                                <Row>
                                    <Col className={style.center}>
                                        <input className={style.searchInput}
                                               placeholder={languagePack.place[langProps.language]} type={"text"}/>
                                        <br/>
                                        <input className={style.searchInput}
                                               placeholder={languagePack.band[langProps.language]} type={"text"}/>
                                        <br/>
                                    </Col>
                                    <Col className={style.center}>
                                        <input className={style.searchInput} type={"date"}/>
                                        <br/>
                                        <input className={style.searchInput}
                                               placeholder={languagePack.ticketCounter[langProps.language]}
                                               type={"number"} min="1"/>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col className={style.center}>
                                        <input className={style.searchBut}
                                               value={languagePack.search[langProps.language]} type={"submit"}/>
                                    </Col>
                                </Row>
                            </Container>
                        </form>
                    </Col>
                    <Col xs={12} sm={12} md={3} lg={2} xl={3}/>
                </Row>

            </Container>
        )}
    </LanguageContext.Consumer>
</>)

export default Search;