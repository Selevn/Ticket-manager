import React from 'react'
import {NavLink, useLocation} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

import languageSrc from "../../../../language.js"
import {LanguageContext} from "../../../Contexts/LanguageContext.js"
import style from './Navbar.module.css'
import "./Navbar.css"


const AppNavbar = () => {

  let locationPath = useLocation().pathname;

  return (
      <div className="sticky-top">
        <LanguageContext.Consumer>
          {langProps => {
            return (
                <Navbar bg="light" expand="lg" className={`justify-content-center  /*${style.container}*/`}>
                  <div style={{textAlign: "center", width: "100%"}}>
                    <Navbar.Toggle aria-controls="basic-navbar-nav"
                                   className={`justify-content-center  /*${style.container}*/`}/>
                    <Navbar.Collapse id="basic-navbar-nav" className={`justify-content-center  /*${style.container}*/`}>
                      <Nav defaultActiveKey={locationPath} className={`justify-content-center  /*${style.container}*/`}>
                        <Nav.Item className={"h30"}>
                          <NavLink className={style.navbarLinks} to="/home"
                                   activeClassName={style.active}>{languageSrc.home[langProps.language]}</NavLink>
                        </Nav.Item>
                        <Nav.Item className={"h30"}>
                          <NavLink className={style.navbarLinks} to="/search"
                                   activeClassName={style.active}>{languageSrc.search[langProps.language]}</NavLink>
                        </Nav.Item>
                        <Nav.Item className={"h30"}>
                          <NavLink className={style.navbarLinks} to="/schedule"
                                   activeClassName={style.active}>{languageSrc.schedule[langProps.language]}</NavLink>
                        </Nav.Item>
                        <Nav.Item className={"h30"}>
                          <NavLink className={style.navbarLinks} to="/contacts"
                                   activeClassName={style.active}>{languageSrc.contacts[langProps.language]}</NavLink>
                        </Nav.Item>
                        <Nav.Item className={"h30"}>
                          <NavLink className={style.navbarLinks}
                                   to="/login">Login</NavLink>
                        </Nav.Item>
                        <div style={{textAlign: "center"}}>
                          <button className={style.chLangButt}
                                  onClick={langProps.toggleLanguage}>{languageSrc.langChange[langProps.language]}</button>
                        </div>
                      </Nav>
                    </Navbar.Collapse>
                  </div>

                </Navbar>)
          }
          }
        </LanguageContext.Consumer>
      </div>
  )
}

export default AppNavbar;