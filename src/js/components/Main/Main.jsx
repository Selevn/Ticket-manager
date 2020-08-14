import React from "react";
import PropTypes from 'prop-types';
import Navbar from "./MainComponents/Navbar/Navbar.jsx"
import Body from "./MainComponents/Body/Body.jsx"
import Footer from "./MainComponents/Footer/Footer.jsx"

const Main = props => (
    <div>
      <Navbar/>
      <Body getConcerts={props.getConcerts}/>
      <Footer/>
    </div>
);

Main.propTypes = {
  getConcerts: PropTypes.func,
}

export default Main;