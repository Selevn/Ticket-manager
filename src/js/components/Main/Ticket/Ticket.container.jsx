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
  let [sector, setSector] = useState(null);
  let [count, setCount] = useState(1)

  useMemo(
      async () => {
        let method = "POST",
            body = JSON.stringify(globalId),
            headers = {"Content-Type": 'application/json'};
        const response = await fetch(backendUrl + "/api/tickets/getConcertTickets", {method, body, headers})
        const data = await response.json()
        setData(data)
        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так")
        }
      },
      [globalId["id"]]
  )

  const buyTicket = useCallback(
      async () => {
        let method = "POST",
            body = JSON.stringify(
                {
                  token: JSON.parse(localStorage.getItem(storage, 'token')).token,
                  concertId: globalId["id"],
                  sectorId: sector,
                  count: count
                }),
            headers = {"Content-Type": 'application/json'};
        const response = await fetch(backendUrl + "/api/tickets/buyTicket", {method, body, headers})
        const data = await response.json()
        setData(data)
        if (!response.ok) {
          throw new Error(data.message || "Что-то пошло не так")
        }
      },
      [globalId["id"], sector, count]
  )


  const chSector = (event) => {
    //id сущности - name сектора
    if (event.target.classList.contains("selectedSector"))
    {
      event.target.classList.remove("selectedSector")
      setSector(null)
    }
    else
    {
      setSector(data.filter((i) => (i.name === event.target.id))[0])
      let svgCollection = document.getElementById("svgCanvas")
      for (let i=0; i<svgCollection.children.length; i++)
      {
        svgCollection.children[i].classList.remove("selectedSector")
      }
      event.target.classList.add("selectedSector")
    }
  }

  const chCount = useCallback((event) => {

    if(event.target.value > 12)
      setCount(12);
    else if(event.target.value < 1){
      setCount(1);
    }
    else{
      setCount(event.target.value);
    }
  }, [])


  return (
      <Ticket data={data}
              back={history.goBack}
              sector={sector}
              setSectorDesc={chSector}
              buyTicket={buyTicket}
              countChange={chCount}
              count={count}
      />
  )

}

TicketContainer.propTypes = {
  getConcerts: PropTypes.func,
  back: PropTypes.func,
  history: PropTypes.object,
}
export default withRouter(TicketContainer);