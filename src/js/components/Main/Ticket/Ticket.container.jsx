import React, {useState, useCallback, useContext, useEffect} from 'react';
import PropTypes from "prop-types"
import {withRouter, useParams} from 'react-router-dom'
import Ticket from "./Ticket.jsx";
import {backendUrl} from "../../../../../config/default.json";

import 'materialize-css'

const storage = "userStorage"

import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";
import {useAuth} from "../../../customHooks/auth.hook.js";

const defaultMax = 12; //max ticket count on one buy

const TicketContainer = ({history}) => {

  const globalId = useParams();

  const [data, setData] = useState([]);
  const [sector, setSector] = useState(null);
  const [count, setCount] = useState(1)
  const [max, setMax] = useState(defaultMax)
  const langContext = useContext(LanguageContext)

  const {isLoggined: checkLogin} = useAuth()

  const [isLogined, setIsLoggined] = useState(defaultMax)

  useEffect(() => {
    setIsLoggined(checkLogin());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])


  /*useMemo(
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
  )*/

  useEffect(() => {
    const f = async () => {
      const method = "POST",
        body = JSON.stringify(globalId),
        headers = {"Content-Type": 'application/json'};
      const response = await fetch(backendUrl + "/api/tickets/getConcertTickets", {method, body, headers})
      const data = await response.json()
      setData(data)
      if (!response.ok) {
        throw new Error(data.message || "Что-то пошло не так")
      }
    }
    f().then(() => {
    })
  }, [
    globalId
  ])

  const buyTicket = useCallback(
    async () => {
      if (max !== 0) {
        if (isLogined) {
          const method = "POST",
            body = JSON.stringify(
              {
                token: JSON.parse(localStorage.getItem(storage)).token,
                concertId: globalId["id"],
                sectorId: sector.id,
                count: count
              }),
            headers = {"Content-Type": 'application/json'};
          const response = await fetch(backendUrl + "/api/tickets/buyTicket", {method, body, headers})
          const data = await response.json()
          console.log("data", data)

          if (!response.ok || data.serverStatus !== 2) {
            window.M.toast({
              html: languageSrc.smthWentWrong[langContext.language],
              displayLength: 5000,
              classes: "error"
            })
            throw new Error(data.message || "Что-то пошло не так")
          } else {
            if (count === 1)
              window.M.toast({
                html: languageSrc.gotTicket[langContext.language],
                displayLength: 5000,
                classes: "success"
              })
            else
              window.M.toast({
                html: languageSrc.gotTickets[langContext.language],
                displayLength: 5000,
                classes: "success"
              })
          }
        } else {
          window.M.toast({
            html: languageSrc.loginBeforeBuying[langContext.language],
            displayLength: 5000,
            classes: "error"
          })
        }
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [globalId, globalId.id, sector, count, max, isLogined]
  )


  const chSector = (event) => {
    //id сущности - name сектора
    if (event.target.classList.contains("selectedSector")) {
      event.target.classList.remove("selectedSector")
      setSector(null)
    } else {
      let localSector = data.filter((i) => (i.name === event.target.id))[0];
      setSector(localSector)
      localSector.numOfSeats = Number(localSector.numOfSeats) || 0;
      localSector.tickCount = Number(localSector.tickCount) || 0;
      setMax(Math.min(defaultMax, localSector.numOfSeats - localSector.tickCount))
      const svgCollection = document.getElementById("svgCanvas")
      for (let i = 0; i < svgCollection.children.length; i++) {
        svgCollection.children[i].classList.remove("selectedSector")
      }
      event.target.classList.add("selectedSector")
    }
  }

  const chCount = useCallback((event) => {
    const localMax = max || defaultMax;
    if (event.target.value > localMax)
      setCount(Number(localMax));
    else if (event.target.value < 1) {
      setCount(1);
    } else {
      setCount(event.target.value);
    }
  }, [max])


  return (
    <Ticket data={data}
            back={history.goBack}
            sector={sector}
            setSectorDesc={chSector}
            buyTicket={buyTicket}
            countChange={chCount}
            count={count}
            max={max}
            isLogined={isLogined}
    />
  )

}

TicketContainer.propTypes = {
  getConcerts: PropTypes.func,
  back: PropTypes.func,
  history: PropTypes.object,
}
export default withRouter(TicketContainer);