import React from 'react'
import languageSrc from "../../../../language";

import {Container, Col, Row} from "react-bootstrap"

import style from "./Footer.module.css"
import {LanguageContext} from "../../../Contexts/LanguageContext.js"

const Footer = () => (
    <LanguageContext.Consumer>
        {langProps => (
            <footer className={style.footer}>
                <Container id={style.containerBlock}>
                    <Row>
                        <Col sm={0} xs={0} md={3} lg={3} xl={3}/>
                        <Col sm={6} xs={6} md={6} lg={6} xl={6} className={style.col2}>
                            Copyright (c) Ivan Skorodumov
                            <br/>
                            Minsk,2020
                            <br/>
                            All rights Reserved
                        </Col>
                        <Col sm={6} xs={6} md={3} lg={3} xl={3} style={{textAlign: "right"}} className={style.col3}>
                            <button onClick={langProps.toggleLanguage} className={style.langButton}>
                                {languageSrc.lang[langProps.language]}
                            </button>
                        </Col>
                    </Row>
                </Container>
            </footer>
        )
        }
    </LanguageContext.Consumer>
)

export default Footer;