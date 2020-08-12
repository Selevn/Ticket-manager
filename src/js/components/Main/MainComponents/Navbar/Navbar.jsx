import React from 'react'
import {NavLink, useLocation} from "react-router-dom";
import {Nav, Navbar} from "react-bootstrap";

import style from './Navbar.module.css'
import "./Navbar.css"


const AppNavbar = () => {
  return (
      <Navbar bg="light" expand="lg" className={`justify-content-center /*${style.container}*/`}>
        <div style={{textAlign: "center"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav defaultActiveKey={useLocation().pathname}>
              <Nav.Item className={"h30"}>
                <NavLink className={style.navbarLinks} to="/home"
                         activeClassName={style.active}>Home</NavLink>
              </Nav.Item>
              <Nav.Item className={"h30"}>
                <NavLink className={style.navbarLinks} to="/search"
                         activeClassName={style.active}>Search</NavLink>
              </Nav.Item>
              <Nav.Item className={"h30"}>
                <NavLink className={style.navbarLinks} to="/schedule"
                         activeClassName={style.active}>Schedule</NavLink>
              </Nav.Item>
              <Nav.Item className={"h30"}>
                <NavLink className={style.navbarLinks} to="/contacts"
                         activeClassName={style.active}>Contacs</NavLink>
              </Nav.Item>
              <Nav.Item className={"h30"}>
                <NavLink className={style.navbarLinks}
                         to="/login">Login</NavLink>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
  )
}

export default AppNavbar;