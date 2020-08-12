import React from 'react'
import {NavLink, useLocation} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

import style from './Navbar.module.css'
import "./Navbar.css"


const AppNavbar = props => {
  return (
      <Navbar bg="light" expand="lg" className={`justify-content-center /*${style.container}*/`}>
        <div style={{textAlign: "center"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey={useLocation().pathname}>
              <Nav.Item className={"h30"}>
                <Nav.Link eventKey="/home"><NavLink className={style.navbarLinks} to="/home"
                                                    activeClassName={style.active}>Home</NavLink></Nav.Link>
              </Nav.Item>
              <Nav.Item className={"h30"}>
                <Nav.Link eventKey="/search"><NavLink className={style.navbarLinks} to="/search"
                                                      activeClassName={style.active}>Search</NavLink></Nav.Link>
              </Nav.Item>
              <Nav.Item className={"h30"}>
                <Nav.Link eventKey="/schedule"><NavLink className={style.navbarLinks} to="/schedule"
                                                        activeClassName={style.active}>Schedule</NavLink></Nav.Link>
              </Nav.Item>
              <Nav.Item className={"h30"}>
                <Nav.Link eventKey="/contacts"><NavLink className={style.navbarLinks} to="/contacts"
                                                        activeClassName={style.active}>Contacs</NavLink></Nav.Link>
              </Nav.Item>
              <Nav.Item className={"h30"}>
                <Nav.Link eventKey="/login"><NavLink className={style.navbarLinks}
                                                     to="/login">Login</NavLink></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
  )
}

export default AppNavbar;