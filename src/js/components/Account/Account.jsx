import React, {useMemo} from "react";
import PropTypes from "prop-types"
import languagePack from "../../language.js";
import style from "./Account.module.css"
import languageSrc from "../../language.js";
import Particle from "../CommonData/Paricles/Particles.jsx";

import {ChevronCompactLeft, ChevronCompactRight} from 'react-bootstrap-icons';
import './Account.css'

const Account = ({logout, langProps, tickets: propsTickets, changer, filter}) => {


  document.getElementsByTagName("title")[0].innerText = "Account";
  let tickets = propsTickets;
  switch (filter) {
    case 'all': {
      break;
    }
    case 'future': {
      tickets = propsTickets.filter(item => (new Date(item.date) > Date.now()))
      break;
    }
    case 'passed': {
      tickets = propsTickets.filter(item => (new Date(item.date) < Date.now()))
      break;
    }
  }

  let structuredTickets = [];
  tickets[0] && tickets.forEach(item => {

    let container = structuredTickets.find(_item => item.concertId === _item.id)
    if (!container) {
      let outObj = {id: item.concertId, tickets: []};
      outObj.tickets.push(item);
      structuredTickets.push(outObj)
    } else {
      container.tickets.push(item)
    }
  })

  const particle = useMemo(() => (<Particle/>), [])

  return (<>
      {particle}
      <div className={"mainContainer"}>
        <div style={{"display":"none"}}>
          <ChevronCompactLeft style={{height:"100%"}} id={"cLeft"}/>
          <ChevronCompactRight style={{height:"100%"}} id={"cRight"}/>
        </div>
        <div className={"pageHeaderRow"}>
          <div className={"pageHeader"}>
            {languageSrc.myTickets[langProps.language]}
          </div>
          <div className={style.logoutButCol}>
            <select onChange={changer} value={filter} className={style.filterSelect}>
              <option value={'all'}>{languageSrc.all[langProps.language]}</option>
              <option value={'future'}>{languageSrc.future[langProps.language]}</option>
              <option value={'passed'}>{languageSrc.passed[langProps.language]}</option>
            </select>

            <button className={style.logoutBut} onClick={logout}>{languagePack.logout[langProps.language]}</button>
          </div>
        </div>
        <div className={style.dataBlock}>
          {structuredTickets[0] && structuredTickets.map((item, index) => {
              let _item = item.tickets[0]
              let _date = new Date(_item.date);
              let _isPassed = _date < Date.now() ? 'passedConcert' : ''; //прошел ли этот концерт
              return (
                <>
                  <div key={index} className={style.ticketContainer + ' ' + _isPassed}>
                    <div className={style.width100}>
                      <div className={style.rowDirection}>
                        <div className={style.ticketBand}>{_item.band}</div>
                        <div className={style.ticketPlace}>{_item.place}</div>
                      </div>
                      <div className={style.rowDirection}>
                        <div className={style.ticketDateAndTime}>
                          <span>{`${_date.getDate()} ${languageSrc.months[_date.getMonth()][langProps.language]} ${_date.getFullYear()}`}</span>
                          <span>{`${(_date.getHours() + "").padStart(2, '0')}:${(_date.getMinutes() + "").padStart(2, '0')}`}</span>
                        </div>
                        <div className={style.ticketPrice}>{item.tickets.length} tickets</div>
                      </div>
                    </div>
                    <div className={style.cardMore} onClick={
                      (event) => {
                        document.getElementById(_item.concertId + 's').classList.toggle("notShowed") ?
                          event.target.innerHTML = document.getElementById("cRight").innerHTML :
                          event.target.innerHTML = document.getElementById("cLeft").innerHTML
                      }}>
                      <ChevronCompactRight style={{height:"100%"}}/>

                    </div>
                  </div>
                  <div className={style.ticketCollectionBlock + ' notShowed'} id={_item.concertId + 's'}>
                    {item.tickets.map((item, index) => {
                      let date = new Date(item.date);
                      let isPassed = date < Date.now() ? 'passedConcert' : ''; //прошел ли этот концерт
                      return (<div key={index}
                                   className={style.ticketBlock + ' ' + isPassed}>
                        <div className={style.rowDirection}>

                          <div className={style.ticketBand}>{item.band}</div>
                          <div
                            className={style.ticketPlace}>{item.place}<br/>{languageSrc.sector[langProps.language]} {item.name || ''}
                          </div>
                        </div>
                        <div className={style.rowDirection}>
                          <div className={style.ticketDateAndTime}>
                            <span>{`${date.getDate()} ${languageSrc.months[date.getMonth()][langProps.language]} ${date.getFullYear()}`}</span>
                            <span>{`${(date.getHours() + "").padStart(2, '0')}:${(date.getMinutes() + "").padStart(2, '0')}`}</span>
                          </div>
                          <div className={style.ticketPrice}>{item.cost}$</div>
                        </div>
                      </div>)
                    })}
                  </div>
                </>
              )
            }
          )
          }
          {
            !structuredTickets[0] && (
              <h3 className={style.noTicketsNotification}>{languageSrc.noTickets[langProps.language]}</h3>)
          }
        </div>
      </div>
    </>
  )
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