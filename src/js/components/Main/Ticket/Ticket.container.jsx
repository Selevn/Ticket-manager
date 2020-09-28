import React, {useState, useCallback, useMemo, useContext} from 'react';
import PropTypes from "prop-types"
import {withRouter} from 'react-router-dom'
import {useParams} from "react-router";
import Ticket from "./Ticket.jsx";
import {backendUrl} from "../../../../../config/default.json";

import 'materialize-css'
const storage = "userStorage"

import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";

const defaultMax = 12;

const TicketContainer = ({history}) => {

  const globalId = useParams();

<<<<<<< HEAD
  let [data, setData] = useState([]);
  let [currentSectorDesc, setSectorDesc] = useState(null);
  let [sector, setSector] = useState(null);
  let [count, setCount] = useState(1)
=======
  const [data, setData] = useState([]);
  const [sector, setSector] = useState(null);
  const [count, setCount] = useState(1)
  const [max, setMax] = useState(defaultMax)
  const langContext = useContext(LanguageContext)
>>>>>>> d548b86... buy ticket functional finished

  useMemo(
      async () => {
        const method = "POST",
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
        if(max !== 0)
        {
          const method = "POST",
            body = JSON.stringify(
              {
                token: JSON.parse(localStorage.getItem(storage, 'token')).token,
                concertId: globalId["id"],
                sectorId: sector.id,
                count: count
              }),
            headers = {"Content-Type": 'application/json'};
          const response = await fetch(backendUrl + "/api/tickets/buyTicket", {method, body, headers})
          const data = await response.json()
          console.log("data",data)

          if (!response.ok  || data.serverStatus !== 2) {
            window.M.toast({html: languageSrc.smthWentWrong[langContext.language], displayLength:5000, classes:"error"})
            throw new Error(data.message || "Что-то пошло не так")
          }else
          {
            if(count === 1)
              window.M.toast({html: languageSrc.gotTicket[langContext.language], displayLength:5000, classes:"success"})
            else
              window.M.toast({html: languageSrc.gotTickets[langContext.language], displayLength:5000, classes:"success"})
          }
        }
      },
      [globalId["id"], sector, count, max]
  )


<<<<<<< HEAD
  const chSector = useCallback((id) => {
    setSectorDesc(data.filter((i) => (i.id === id))[0]);
    setSector(id)
  }, [data])

  const chCount = useCallback((event) => {
    setCount(event.target.value);
  }, [])
=======
  const chSector = (event) => {
    //id сущности - name сектора
    if (event.target.classList.contains("selectedSector"))
    {
      event.target.classList.remove("selectedSector")
      setSector(null)
    }
    else
    {
      let localSector = data.filter((i) => (i.name === event.target.id))[0];
      setSector(localSector)
      setMax(Math.min(defaultMax,Number(localSector.numOfSeats) - Number(localSector.tickCount)))
      const svgCollection = document.getElementById("svgCanvas")
      for (let i=0; i<svgCollection.children.length; i++)
      {
        svgCollection.children[i].classList.remove("selectedSector")
      }
      event.target.classList.add("selectedSector")
    }
  }

  const chCount = useCallback((event) => {
    const localMax = max || defaultMax;
    if(event.target.value > localMax)
      setCount(Number(localMax));
    else if(event.target.value < 1){
      setCount(1);
    }
    else{
      setCount(event.target.value);
    }
  }, [max])


>>>>>>> d548b86... buy ticket functional finished
  return (
      <Ticket data={data}
              back={history.goBack}
              currentSectorDesc={currentSectorDesc}
              setSectorDesc={chSector}
              buyTicket={buyTicket}
              countChange={chCount}
              count={count}
              max={max}
      />
  )

}

TicketContainer.propTypes = {
  getConcerts: PropTypes.func,
  back: PropTypes.func,
  history: PropTypes.object,
}
export default withRouter(TicketContainer);