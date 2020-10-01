import React, {useMemo} from 'react'
import PropTypes from "prop-types"


import languageSrc from "../../../language.js"
import {LanguageContext} from "../../Contexts/LanguageContext.js"
import {SocialIcon} from 'react-social-icons';
import style from "./Contacts.module.css"
import Particle from "../../CommonData/Paricles/Particles.jsx";

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
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11183.244235022457!2d27.55759333938496!3d53.89642616822282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46dbcfdfcda0610d%3A0x9481802953755ca6!2sTitul%20Business%20Center!5e0!3m2!1sen!2sby!4v1601394101218!5m2!1sen!2sby"
                    width="100%" height="100%" frameBorder="0" allowFullScreen=""
                    aria-hidden="false" tabIndex="0"/>
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
                    <SocialIcon style={{height: 70, width: 70}} className={style.socialIcon}
                                url="https://twitter.com/elonmusk"/>
                    <SocialIcon style={{height: 70, width: 70}} className={style.socialIcon}
                                url="https://www.facebook.com/elonreevesmusk/"/>
                    <SocialIcon style={{height: 70, width: 70}} className={style.socialIcon}
                                url="https://vk.com/elonmusk"/>
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