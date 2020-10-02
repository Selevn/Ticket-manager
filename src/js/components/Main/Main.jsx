import React from "react";
import PropTypes from 'prop-types';
import Navbar from "./MainComponents/Navbar/Navbar.jsx"
import Body from "./MainComponents/Body/Body.jsx"
import Footer from "./MainComponents/Footer/Footer.jsx"

<<<<<<< HEAD
const Main = props => (
    <div>
      <Navbar/>
      <Body getConcerts={props.getConcerts}/>
      <Footer/>
    </div>
);
=======
import "../main.css"
import style from "./Main.module.css"




const Main = props => {
  return(
  <div className={style.mainDiv}>
    <Navbar/>
    <Body getConcerts={props.getConcerts}/>
    <Footer/>
  </div>
)}
>>>>>>> 27369a8... e-mail approvement, small fixes

Main.propTypes = {
  getConcerts: PropTypes.func,
}

export default Main;