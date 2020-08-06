import React from "react";
import Navbar from "./MainComponents/Navbar/Navbar.jsx"
import Body from "./MainComponents/Body/Body.jsx"
import Footer from "./MainComponents/Footer/Footer.jsx"

function Main(props) {
    return (
        <div>
            <Navbar/>
            <Body getConcerts = {props.getConcerts}/>
            <Footer/>
        </div>
    );
}


export default Main;