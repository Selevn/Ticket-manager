import React from "react";
import {NavLink} from "react-router-dom";

function Main(props) {
    return (
        <div>Main<br/>
            <NavLink to="/admin">admin</NavLink><br/>
            <NavLink to="/login">Login</NavLink><br/>
        </div>
    );
}


export default Main;