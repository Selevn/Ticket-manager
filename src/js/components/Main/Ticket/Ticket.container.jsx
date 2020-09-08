import React, {useState, useEffect, useCallback, useMemo} from 'react';
import PropTypes from "prop-types"
import {withRouter} from 'react-router-dom'
import {useParams} from "react-router";
import Ticket from "./Ticket.jsx";
import {backendUrl} from "../../../../../config/default.json";


const storage = "userStorage"

const TicketContainer = ({history}) => {

    const globalId = useParams();

    let [data, setData] = useState([]);
    let [currentSectorDesc, setSectorDesc] = useState(null);
    let [sector, setSector] = useState(null);


    useMemo(
        async ()=>{
          let method = "POST", body = JSON.stringify(globalId), headers = {"Content-Type":'application/json'};

          const response = await fetch(backendUrl+"/api/tickets/getConcertTickets", {method, body, headers})
          console.log("response",response)
          const data = await response.json()
          setData(data)
          if (!response.ok) {
            throw new Error(data.message || "Что-то пошло не так")
          }
        },
        []
    )

  const buyTicket = useCallback(
      async ()=>{
        let method = "POST", body = JSON.stringify({token:localStorage.getItem(storage,'token'),concertId:globalId["id"],sectorId:sector}), headers = {"Content-Type":'application/json'};

        const response = await fetch(backendUrl+"/api/tickets/buyTicket", {method, body, headers})
        console.log("response",response)
        const data = await response.json()
        setData(data)
        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так")
        }
      },
      [globalId["id"],sector]
  )



  const chSector = useCallback((id) =>{
    setSectorDesc(data.filter((i)=>(i.id===id))[0]);
    setSector(id)
  },[data])

  console.log("data",data)
    return (
        <Ticket data={data}
                back={history.goBack}
                currentSectorDesc = {currentSectorDesc}
                setSectorDesc = {chSector}
                buyTicket = {buyTicket}
        />
    )

}

TicketContainer.propTypes = {
    getConcerts: PropTypes.func,
    back: PropTypes.func,
    history: PropTypes.object,
}
export default withRouter(TicketContainer);