import React from 'react'
import {Link} from "react-router-dom";

import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import style from "./Hall.module.css"

import {Container, Row, Col} from "react-bootstrap";

import PropTypes from "prop-types"
import Schedule from "../Schedule/Schedule.jsx";

const Hall = ({hall, concerts, halls}) => {

    return (<div>
        <LanguageContext.Consumer>
            {langProps => (
                <>
                    <Container className={style.mainContainer}>
                        <Row>
                            <Col>
                                <div className={style.hallImageDiv}>
                                    <img className={style.hallImage} src={hall.imgSrc}/>
                                </div>
                            </Col>
                            <Col>
                                <div>
                                    <Row>
                                        <Col className={style.hallName}><h3>{hall.place}</h3></Col>
                                    </Row>
                                    <Row>
                                        <Col className={style.hallDescription}>{hall.description}</Col>
                                    </Row>
                                </div>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <Schedule concerts={concerts}/>
                            </Col>
                        </Row>
                        <Row>
                            <Col>
                                <h1 className={style.hallName}>{languageSrc.seeAlso[langProps.language]}</h1>
                                <Container className={style.alsoContainer}>
                                    <Row>

                                        {halls.filter((item) => (item.id !== hall.id)).map((item) =>
                                            <Col className={style.alsoCol}>
                                                <Link to={"/hall/" + item.id}>
                                                    <img className={style.alsoImg} src={item.imgSrc}/>
                                                    <h5 className={style.hallName}>{item.place}</h5>
                                                </Link>
                                            </Col>)}

                                    </Row>
                                </Container>
                            </Col>
                        </Row>

                    </Container>
                </>
            )}
        </LanguageContext.Consumer>
    </div>)
}


Hall.propTypes = {
    hall: PropTypes.object,
    halls: PropTypes.array,
    concerts: PropTypes.array,
}

export default Hall;