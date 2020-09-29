import React, {useMemo} from 'react'
import PropTypes from "prop-types"


import languageSrc from "../../../language.js"
import {LanguageContext} from "../../Contexts/LanguageContext.js"

import style from "./Contacts.module.css"
import Particle from "../../CommonData/Paricles/Particles.jsx";
import {Link} from "react-router-dom";

const Contacts = ({getContacts}) => {
  getContacts();

  const particle = useMemo(
      () => (<Particle/>), []
  )
/*

  let _contacts = Object.entries(contacts);

  const SoloLine = (data) => (
      <tr>
        <td className={style.dateTr}>{data}</td>
      </tr>
  )
  const RowInitLine = (name, length, data) => (
      <tr className={style.newData}>
        <td rowSpan={length} className={style.td}>{name}</td>
        <td className={style.dateTr}>{data}</td>
      </tr>
  )
  const DefaultLine = (name, data) => (
      <tr className={style.newData}>
        <td className={style.td}>{name}</td>
        <td className={style.dateTr}>{data}</td>
      </tr>
  )
*/

  return (
      <>
        <LanguageContext.Consumer>
          {langProps => (
              <>
                <div className={"mainContainer"} id={"mainContainerRef"}>
                  {particle}
                  <div className={"pageHeaderRow"}>
                    <div className={"pageHeader"}>
                      {languageSrc.contacts[langProps.language]}
                    </div>
                  </div>
                  <div className={style.mainData}>
                    <div className={style.ourMap}>

                    </div>
                    <div className={style.dataRow}>
                      <div className={style.oneRow}>
                        <span className={style.titleHeader}>{languageSrc.email[langProps.language]}</span>
                        <span className={style.titleData}>van000200136@gmail.com</span>
                      </div>
                      <div className={style.oneRow}>
                        <span className={style.titleHeader}>{languageSrc.phone[langProps.language]}</span>
                        <span className={style.titleData}>+375295295862</span>
                      </div>
                      <div className={style.oneRow}>
                        <span className={style.titleHeader}>{languageSrc.skype[langProps.language]}</span>
                        <span className={style.titleData}>Live:example@outlook.com</span>
                      </div>
                      <div className={style.oneRow}>
                        <span className={style.titleHeader}>{languageSrc.adress[langProps.language]}</span>
                        <span className={style.titleData}>г. Минск улица Толстого, 10</span>
                      </div>
                      <div className={style.oneRow}>
                        <Link to={'#'}><span className={style.titleHeader}>Twitter</span></Link>
                        <Link to={'#'}><span className={style.titleHeader}>Facebook</span></Link>
                        <Link to={'#'}><span className={style.titleHeader}>VK</span></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </>)
          }</LanguageContext.Consumer>
      </>)

}

Contacts.propTypes = {
  getContacts: PropTypes.func,
  contacts: PropTypes.object,
}

export default Contacts;