import React from 'react'
import {Link} from "react-router-dom";

import {LanguageContext} from "../../Contexts/LanguageContext";
import languageSrc from "../../../language"

import style from "./Home.module.css"
import "./Home.css"

import Particles from 'react-particles-js';

import {Container, Row, Col} from "react-bootstrap";
import {Search} from 'react-bootstrap-icons';

import PropTypes from "prop-types"

const Home = ({concerts, onInputChange, upcomingConcerts, searchText, onSearch, onEnterSearch, inputRef, showMore, concertInBaseCount}) => {

    return (<>
        <LanguageContext.Consumer>
            {langProps => (
                <>
                    <Container className={style.mainContainer} id={"mainContainerRef"}>
                        <Particles
                            params={{
                                particles: {
                                    number: {
                                        value: document.body.offsetHeight*document.body.offsetWidth/10000
                                    },
                                    color: {
                                        value: "#000000"
                                    },
                                    opacity: {
                                        value: 0.5,
                                        random: true
                                    },
                                    size:
                                        {value: 2},
                                    line_linked: {
                                        enable:true,
                                        distance:150,
                                        color:"#000",
                                    },
                                    move:
                                        {
                                            speed:1
                                        }


                                }
                            }}
                            canvasClassName={style.backgroundPartickle}
                            width = {document.body.offsetWidth<400?window.innerWidth+"px":document.body.offsetWidth+"px"}
                            height = {document.body.offsetHeight<400?window.innerWidth+"px":document.body.offsetHeight+"px"}/>
                        <Row className={style.searchRow}>
                            <div className={style.searchHeader}>
                                {languageSrc.soon[langProps.language]}
                            </div>
                            <div className={style.searchBlock}>
                                <input
                                    className={style.searchInput}
                                    placeholder={languageSrc.search[langProps.language]}
                                    type="text"
                                    value={searchText}
                                    onChange={onInputChange}
                                    onKeyDown={onEnterSearch}
                                    ref={inputRef}
                                />
                                <button
                                    className={style.searchBut}
                                    onClick={onSearch}>
                                    <Search color="black" className={style.searchIcon}></Search>
                                </button>

                            </div>


                            <div className={style.tip}>
                                {
                                    concerts[0] && (<ul className={style.tipUl}>
                                        {concerts.map((item) =>
                                            <li className={style.tipLi} key={item.id}>
                                                <Link className={style.tipLink}
                                                      to={"concert/" + item.id}>{item.band}</Link>
                                            </li>)}
                                    </ul>)
                                }
                            </div>
                        </Row>
                        <Row className={style.recentRow}>
                            {
                                upcomingConcerts[0] && upcomingConcerts.map(
                                    (item, index) => {
                                        let day, month, year;
                                        day = new Date(item.date).getDate() + 1;
                                        month = languageSrc.months[new Date(item.date).getMonth()][langProps.language];
                                        year = new Date(item.date).getFullYear();

                                        return (
                                            <div className={style.soonCard}>
                                                <div className={style.frontImage}>
                                                    <Link
                                                        to={"concert/" + (upcomingConcerts.length > 0 ? upcomingConcerts[index].id : index)}>
                                                        <img className={style.centreImage}
                                                             src={upcomingConcerts.length !== 0 ? upcomingConcerts[index].imgSrc : "https://media2.giphy.com/media/3oEjI6SIIHBdRxXI40/200.gif"}/>
                                                    </Link>
                                                </div>
                                                <div className={style.backImage}>
                                                    <Link
                                                        to={"concert/" + (upcomingConcerts.length !== 0 && upcomingConcerts[index].id)}>
                                                        <div className={style.infoCol}>
                                                            <span>{languageSrc.band[langProps.language]}: </span>
                                                            <b>{upcomingConcerts.length !== 0 && upcomingConcerts[index].band}</b>
                                                            <br/>
                                                            <span>{languageSrc.place[langProps.language]}: </span>
                                                            <b>{upcomingConcerts.length !== 0 && upcomingConcerts[index].place}</b>
                                                            <br/>
                                                            <span>{languageSrc.date[langProps.language]}: </span>
                                                            <b>{`${day} ${month} ${year}`}</b>
                                                            <br/>
                                                        </div>
                                                    </Link>
                                                </div>
                                            </div>
                                        )
                                    })
                            }
                        </Row>
                        {(concertInBaseCount - upcomingConcerts.length > 3) && (
                            <Row className={style.more}
                                 onClick={showMore}>
                                <span
                                    className={style.centerAlign}
                                >{languageSrc.more[langProps.language]}</span>
                            </Row>)}
                    </Container>
                </>
            )}
        </LanguageContext.Consumer>
    </>)
}


Home.propTypes = {
    concerts: PropTypes.array,
    searchText: PropTypes.string,
    onInputChange: PropTypes.func,
    upcomingConcerts: PropTypes.array,
    onFocusOut: PropTypes.func,
    onEnterSearch: PropTypes.func,
    onSearch: PropTypes.func,
}

export default Home;