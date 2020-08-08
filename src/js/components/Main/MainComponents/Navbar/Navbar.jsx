import React from 'react'
import {NavLink} from "react-router-dom";

import style from './Navbar.module.css'

function Navbar(props) {
    return(<div>
        <NavLink to="/admin">admin</NavLink><br/>
        <NavLink to="/login">Login</NavLink><br/>
        <NavLink to="/home" activeClassName={style.active}>home</NavLink><br/>
        <NavLink to="/search" activeClassName={style.active}>search</NavLink><br/>
        <NavLink to="/schedule" activeClassName={style.active}>schedule</NavLink><br/>
        <NavLink to="/contacts" activeClassName={style.active}>contacts</NavLink><br/>
    </div>)
}

export default Navbar;