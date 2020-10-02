import React, {useState, useCallback, useMemo, useContext, useEffect} from 'react';
import PropTypes from "prop-types"
import {withRouter} from 'react-router-dom'
import {useParams} from "react-router";
import Ticket from "./Ticket.jsx";
import {backendUrl} from "../../../../../config/default.json";

import 'materialize-css'
const storage = "userStorage"

import {LanguageContext} from "../../Contexts/LanguageContext.js";
import languageSrc from "../../../language.js";
import {useAuth} from "../../../customHooks/auth.hook.js";

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

  const {isLoggined:checkLogin} = useAuth()

  const [isLogined, setIsLoggined] = useState(defaultMax)

  useEffect(()=>{
    setIsLoggined(checkLogin());
  },[])


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
<<<<<<< HEAD
  )
=======
  )*/
var interval  = useRef();

  useEffect(() => {
    const f = async () => {
      const method = "POST",
        body = JSON.stringify(globalId),
        headers = {"Content-Type": 'application/json'};
      const response = await fetch(backendUrl + "/api/tickets/getConcertTickets", {method, body, headers})
      const _data = await response.json()

      if (!response.ok) {
        throw new Error(_data.message || "Что-то пошло не так")
      }
      else{
        setData(_data)
        let currData = data.find(item=>item.id===sector.id);
        setMax(Math.min(defaultMax,(currData && currData.numOfSeats-currData.tickCount)||10000))
      }

    }
    interval.current = setInterval(f,1000)
    //f()//.then(() => {interval.current = setInterval(f(),1000)})

return ()=>{clearInterval(interval.current)}
  }, [
    globalId
  ])
>>>>>>> 3fcf712... synch buying tickets(1s delay), can't buy less than availible tickets on backend

  const buyTicket = useCallback(
<<<<<<< HEAD
      async () => {
        if(max !== 0)
        {
          if(isLoggined){
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
          }
          else{
=======
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
          const response = await fetch(backendUrl + "/api/auth/buyTicket", {method, body, headers})
          const data = await response.json()
<<<<<<< HEAD
          console.log("data", data)

          if (!response.ok || data.serverStatus !== 2) {
>>>>>>> cf3d048... small update, start making eMail confirming
            window.M.toast({
              html: languageSrc.loginBeforeBuying[langContext.language],
              displayLength: 5000,
              classes: "error"
            })
=======
          if (!response.ok || data.serverStatus !== 2) {
            if(data.serverStatus === 500)
            {
              window.M.toast({
                html: languageSrc.noMoreAvailibleTickets[langContext.language],
                displayLength: 5000,
                classes: "error"
              })
            }
            else
            {
              window.M.toast({
                html: languageSrc.smthWentWrong[langContext.language],
                displayLength: 5000,
                classes: "error"
              })
            }
            //throw new Error(data.message || "Что-то пошло не так")
          }

        else {

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
>>>>>>> 27369a8... e-mail approvement, small fixes
          }
        }
<<<<<<< HEAD
      },
      [globalId["id"], sector, count, max, isLoggined]
=======
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [globalId, globalId.id, sector, count, max, isLogined]
>>>>>>> cf3d048... small update, start making eMail confirming
  )


<<<<<<< HEAD
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
=======
  const chSector = useCallback((event) => {
>>>>>>> 3fcf712... synch buying tickets(1s delay), can't buy less than availible tickets on backend
    //id сущности - name сектора
    if (event.target.classList.contains("selectedSector"))
    {
      event.target.classList.remove("selectedSector")
      setSector(null)
<<<<<<< HEAD
    }
    else
    {
      let localSector = data.filter((i) => (i.name === event.target.id))[0];
      setSector(localSector)
      setMax(Math.min(defaultMax,Number(localSector.numOfSeats) - Number(localSector.tickCount)))
=======
    } else {
      let localSector = data.find((i) => (i.name === event.target.id));
      setSector(localSector)
      localSector = localSector || {}
      localSector.numOfSeats = Number(localSector && localSector.numOfSeats) || 0;
      localSector.tickCount = Number(localSector && localSector.tickCount) || 0;
      setMax(Math.min(defaultMax, localSector.numOfSeats - localSector.tickCount))
>>>>>>> 3fcf712... synch buying tickets(1s delay), can't buy less than availible tickets on backend
      const svgCollection = document.getElementById("svgCanvas")
      for (let i=0; i<svgCollection.children.length; i++)
      {
        svgCollection.children[i].classList.remove("selectedSector")
      }
      event.target.classList.add("selectedSector")
    }
  },[data])

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
<<<<<<< HEAD
      <Ticket data={data}
              back={history.goBack}
              currentSectorDesc={currentSectorDesc}
              setSectorDesc={chSector}
              buyTicket={buyTicket}
              countChange={chCount}
              count={count}
              max={max}
              isLoggined={isLoggined}
      />
=======
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
>>>>>>> cf3d048... small update, start making eMail confirming
  )

}

TicketContainer.propTypes = {
  getConcerts: PropTypes.func,
  back: PropTypes.func,
  history: PropTypes.object,
}
export default withRouter(TicketContainer);