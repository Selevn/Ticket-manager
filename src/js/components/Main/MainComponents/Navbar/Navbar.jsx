import React from 'react'
import {NavLink} from "react-router-dom";

import languageSrc from "../../../../language.js"
import {LanguageContext} from "../../../Contexts/LanguageContext.js"
import style from './Navbar.module.css'

function Navbar(props) {
  return (
      <div>
        <LanguageContext.Consumer>
          { langProps => {
            return (
              <div>
                <button onClick={langProps.toggleLanguage}>{languageSrc.langChange[langProps.language]}</button>
                <NavLink to="/admin">admin</NavLink><br/>
                <NavLink to="/login">Login</NavLink><br/>
                <NavLink to="/home" activeClassName={style.active}>{languageSrc.home[langProps.language]}</NavLink><br/>
                <NavLink to="/search" activeClassName={style.active}>{languageSrc.search[langProps.language]}</NavLink><br/>
                <NavLink to="/schedule" activeClassName={style.active}>{languageSrc.schedule[langProps.language]}</NavLink><br/>
                <NavLink to="/contacts" activeClassName={style.active}>{languageSrc.contacts[langProps.language]}</NavLink><br/>
              </div>)}
          }
        </LanguageContext.Consumer>
      </div>
  )
}

export default Navbar;