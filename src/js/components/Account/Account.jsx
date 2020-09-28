import React, {useMemo} from "react";
import PropTypes from "prop-types"
import languagePack from "../../language.js";
import style from "./Account.module.css"
import languageSrc from "../../language.js";
import Particle from "../CommonData/Paricles/Particles.jsx";
import './Account.css'
const Account = ({logout, langProps, tickets:propsTickets, changer, filter}) => {
  let tickets = propsTickets;
  switch (filter){
    case 'all':
    {
      break;
    }
    case 'future':
    {
      tickets = propsTickets.filter(item=>(new Date(item.date)>Date.now()))
      break;
    }
    case 'passed':
    {
      tickets = propsTickets.filter(item=>(new Date(item.date)<Date.now()))
      break;
    }
  }

  let structuredTickets = {};
  tickets[0] && tickets.forEach(item => {
    if (item.concertId in structuredTickets) {
      if (!Array.isArray(structuredTickets[item.concertId]))
        structuredTickets[item.concertId] = [];
    } else {
      structuredTickets[item.concertId] = [];
    }
    structuredTickets[item.concertId].push(item);
  })
  console.log(structuredTickets)
  const particle = useMemo(() => (<Particle/>), [])
  return (<>
    {particle}
    <div className={"mainContainer"}>
      <div className={"pageHeaderRow"}>
        <div className={"pageHeader"}>
          {languageSrc.myTickets[langProps.language]}
        </div>
        <div className={style.logoutButCol}>
          <select onChange={changer} value = {filter} className={style.filterSelect}>
            <option value={'all'}>{languageSrc.all[langProps.language]}</option>
            <option value={'future'}>{languageSrc.future[langProps.language]}</option>
            <option value={'passed'}>{languageSrc.passed[langProps.language]}</option>
          </select>

          <button className={style.logoutBut} onClick={logout}>{languagePack.logout[langProps.language]}</button>
        </div>
      </div>
      <div className={style.dataBlock}>
        {tickets[0] && tickets.map(item=>{
          let date = new Date(item.date);
          let isPassed = date<Date.now()?'passedConcert':''; //прошел ли этот концерт
          return(<div className={style.ticketBlock + ' '+ isPassed}>
            <div className={style.rowDirection}>
              <div className={style.ticketBand}>{item.band}</div>
              <div className={style.ticketPlace}>{item.place}</div>
            </div>
            <div className={style.rowDirection}>
              <div className={style.ticketDateAndTime}>
                <span>{`${date.getDate()} ${languageSrc.months[date.getMonth()][langProps.language]} ${date.getFullYear()}`}</span>
                <span>{`${(date.getHours()+"").padStart(2,'0')}:${(date.getMinutes()+"").padStart(2,'0')}`}</span>
              </div>
              <div className={style.ticketPrice}>{item.cost}$</div>
            </div>
          </div>)
        })}
      </div>
    </div>
  </>)
}
Account.propTypes = {
  logout: PropTypes.func,
  langProps: PropTypes.object,
  userId: PropTypes.number,
  tickets: PropTypes.array,
  filter: PropTypes.string,
  changer: PropTypes.func,
}

export default Account