import React from 'react'
import {NavLink} from "react-router-dom";

function Navbar(props) {
    return(<div>
        <NavLink to="/admin">admin</NavLink><br/>
        <NavLink to="/login">Login</NavLink><br/>
        <NavLink to="/">home</NavLink><br/>
        <NavLink to="/search">search</NavLink><br/>
        <NavLink to="/schedule">schedule</NavLink><br/>
        <NavLink to="/contacts">contacts</NavLink><br/>
    </div>)

}

export default Navbar;