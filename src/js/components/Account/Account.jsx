import React from "react";
import PropTypes from "prop-types"
import {Col, Container, Row} from "react-bootstrap";
import languagePack from "../../language.js";
import style from "./Account.module.css"
<<<<<<< HEAD

const Account = ({logout, langProps, tickets}) => (<>
      <Container className={style.mainContainer}>
        <Row className={style.headerRow}>
          <Col xs={12} sm={12} md={3} lg={3} xl={3}></Col>
          <Col xs={12} sm={12} md={6} lg={6} xl={6}
               className={style.headerNameCol}><h1>{languagePack.myTickets[langProps.language]}</h1></Col>
          <Col xs={12} sm={12} md={3} lg={3} xl={3} className={style.logoutButCol}>
            <button className={style.logoutBut} onClick={logout}>{languagePack.logout[langProps.language]}</button>
          </Col>
        </Row>
        <Row>

          <Col xs={12} sm={12} md={12} lg={12} xl={12} className={style.headerNameCol}>
            <table className={style.ticketTable}>
              <thead></thead>
              <tbody>
              <tr> {/*tr->td*/}
                <td className={style.boldHeader}>{languagePack.band[langProps.language]}</td>
                <td className={style.boldHeader}>{languagePack.place[langProps.language]}</td>
                <td className={style.boldHeader}>{languagePack.date[langProps.language]}</td>
                <td className={style.boldHeader}>{languagePack.cost[langProps.language]}</td>
              </tr>
              {tickets[0] && tickets.map((item) => {
                return (
                    <tr key={item.id} className={style.tableTr}>
                      <td className={style.tableTd}>{item.band}</td>
                      <td className={style.tableTd}>{item.place}</td>
                      <td className={style.tableTd}>{new Date(item.date).getDate()} {languagePack.months[new Date(item.date).getMonth()][langProps.language]} {new Date(item.date).getFullYear()}</td>
                      <td className={style.tableTd}>{item.cost}$</td>
                    </tr>
                )
              })}
              </tbody>
            </table>
          </Col>
        </Row>
      </Container>
    </>
)
=======
import languageSrc from "../../language.js";
import Particle from "../CommonData/Paricles/Particles.jsx";
<<<<<<< HEAD
=======

import {ChevronCompactLeft, ChevronCompactRight} from 'react-bootstrap-icons';
>>>>>>> 3fcf712... synch buying tickets(1s delay), can't buy less than availible tickets on backend
import './Account.css'
<<<<<<< HEAD
const Account = ({logout, langProps, tickets:propsTickets, changer, filter}) => {
=======

const Account = ({logout, langProps, tickets: propsTickets, changer, filter}) => {

<<<<<<< HEAD
>>>>>>> cf3d048... small update, start making eMail confirming
=======

  document.getElementsByTagName("title")[0].innerText = "Account";
>>>>>>> 502a6c7... account chevron fix + db fix
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
<<<<<<< HEAD
  console.log(structuredTickets)
=======

>>>>>>> cf3d048... small update, start making eMail confirming
  const particle = useMemo(() => (<Particle/>), [])
  return (<>
<<<<<<< HEAD
    {particle}
    <div className={"mainContainer"}>
      <div className={"pageHeaderRow"}>
        <div className={"pageHeader"}>
          {languageSrc.myTickets[langProps.language]}
=======
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
>>>>>>> 502a6c7... account chevron fix + db fix
        </div>
<<<<<<< HEAD
        <div className={style.logoutButCol}>
          <select onChange={changer} value = {filter} className={style.filterSelect}>
            <option value={'all'}>{languageSrc.all[langProps.language]}</option>
            <option value={'future'}>{languageSrc.future[langProps.language]}</option>
            <option value={'passed'}>{languageSrc.passed[langProps.language]}</option>
          </select>
=======
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
>>>>>>> 3fcf712... synch buying tickets(1s delay), can't buy less than availible tickets on backend

<<<<<<< HEAD
          <button className={style.logoutBut} onClick={logout}>{languagePack.logout[langProps.language]}</button>
=======
                            <div className={style.ticketBand}>{item.band}</div>
                            <div className={style.ticketPlace}>{item.place}</div>
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
            !structuredTickets[0] && (<h3 className={style.noTicketsNotification}>{languageSrc.noTickets[langProps.language]}</h3>)
          }
>>>>>>> cf3d048... small update, start making eMail confirming
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
>>>>>>> 33800b6... Account page made + buy ticket features like a decline buying tickets for non-authed users
Account.propTypes = {
  logout: PropTypes.func,
  langProps: PropTypes.object,
  userId: PropTypes.number,
  tickets: PropTypes.array,
  filter: PropTypes.string,
  changer: PropTypes.func,
}

export default Account