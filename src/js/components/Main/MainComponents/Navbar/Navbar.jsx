import React from 'react'
import {NavLink, useLocation} from "react-router-dom";
import {Navbar, Nav} from "react-bootstrap";

import style from './Navbar.module.css'
import "./Navbar.css"


function Navbar(props) {
  return (
      <Navbar bg="light" expand="lg" className={`justify-content-center /*${style.container}*/`}>
        <div style={{textAlign: "center"}}>
          <Navbar.Toggle aria-controls="basic-navbar-nav"/>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav variant="pills" defaultActiveKey={useLocation().pathname}>
              <Nav.Item>
                <Nav.Link eventKey="/home"><NavLink className={"s11"} to="/home">Home</NavLink></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/search"><NavLink className={"s11"} to="/search">Search</NavLink></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/schedule"><NavLink className={"s11"} to="/schedule">Schedule</NavLink></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/contacts"><NavLink className={"s11"} to="/contacts">Contacs</NavLink></Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link eventKey="/login"><NavLink className={"s11"} to="/login">Login</NavLink></Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </div>
      </Navbar>
  )
}

export default Navbar;