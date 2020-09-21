import React, {useMemo} from 'react'

import {LanguageContext} from "../../Contexts/LanguageContext.js"
import languagePack from "../../../language.js";

import style from "./Search.module.css"
import languageSrc from "../../../language";
import ConcertItem from "../../CommonData/ConcertItem.jsx"
import Particle from "../../CommonData/Paricles/Particles.jsx";

const Search = ({concerts}) => {
  const particle = useMemo(() => (<Particle/>), [])

  let halls = []
  concerts.forEach((item) => {
    if (halls.indexOf(item.place) === -1)
      halls.push(item.place)
  })


  return (<>
    <LanguageContext.Consumer>
      {langProps => {
        return (
          <>
            {particle}
            <div className={"mainContainer"}>
              <div className={"pageHeaderRow " + style.pageHeaderSchedule}>
                <div className={"pageHeader"}>
                  {languageSrc.search[langProps.language]}
                </div>
                <div className={style.searchDiv}>
                  <div className={style.searchSubBlock}>
                    <label htmlFor={"halls"}>{languageSrc.place[langProps.language]}</label>
                    <select name="halls" className={style.hallsSelect}>
                      <option>--/--</option>
                      {halls.map((item) => {
                        return (
                          <option value={item}>{item}</option>
                        )
                      })}
                    </select>
                  </div>
                  <div className={style.searchSubBlock}>
                    <label>Band</label>
                    <input className={style.searchInput} placeholder={languagePack.band[langProps.language]}
                           type={"text"}/>
                  </div>
                  <div className={style.searchSubBlock}>
                    <label>Period</label>
                    <div className={style.flexRow}>
                      <input className={style.searchInput} name={"startDate"} type={"date"} placeholder={"С"}/>
                      <span> - </span>
                      <input className={style.searchInput} name={"endDate"} type={"date"} placeholder={"по"}/>
                    </div>
                  </div>
                  <div className={style.searchSubBlock}>
                    <label>{languagePack.ticket[langProps.language]}</label>
                    <input className={style.searchInput} placeholder={languagePack.ticketCounter[langProps.language]}
                           type={"number"} min="1" max="100"/>
                  </div>
                  <div className={style.searchSubBlock}>
                    <input className={style.searchBut} value={languagePack.search[langProps.language]}
                           type={"submit"}/>
                  </div>
                </div>
              </div>
              <div className={style.mainData}>
                {
                  concerts.map((item, index) =>
                    (<ConcertItem item={item} langProps={langProps} key={index}/>)
                  )
                }
              </div>
            </div>
          </>
        )
      }}
    </LanguageContext.Consumer>
  </>)
}

export default Search;