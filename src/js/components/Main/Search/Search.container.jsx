<<<<<<< HEAD
import React from 'react'
=======
import React, {useEffect, useState} from 'react'
>>>>>>> 7e79654... search page functionsl

import Search from "./Search.jsx"

<<<<<<< HEAD
const SearchContainer = () => (<Search/>)

=======
const SearchContainer = ({getConcerts, concerts: propConcerts}) => {

  const [place, setPlace] = useState("");
  const [band, setBand] = useState("");
  const [dateStart, setDateStart] = useState(undefined);
  const [dateEnd, setDateEnd] = useState(undefined);
  const [ticketNumber, setTicketNumber] = useState("");
  const [concerts, setConcerts] = useState([]);

  const searchEvent = () => {
    setConcerts(propConcerts
        .filter((item) => (place ? item.place === place : true))
        .filter((item) => (band ? item.band.indexOf(band)!==-1 : true))
        .filter((item) => (dateStart ? new Date(item.date) > dateStart : true))
        .filter((item) => (dateEnd ? new Date(item.date) < dateEnd : true)))
  }

  const changer = (event) => {
    switch (event.target.name) {
      case 'place': {
        setPlace(event.target.value)
        searchEvent()
        break;
      }
      case 'band': {
        setBand(event.target.value)
        searchEvent()
        break;
      }
      case 'startDate': {
        setDateStart(new Date(event.target.value))
        searchEvent()
        break;
      }
      case 'endDate': {
        setDateEnd(new Date(event.target.value))
        searchEvent()
        break;
      }
      case 'ticketNumber': {
        setTicketNumber(event.target.value)
        searchEvent()
        break;
      }
    }
  }


  useEffect(() => {
      getConcerts()
  }, [])
  useEffect(()=>{
    setConcerts(propConcerts)
    searchEvent()
  },[propConcerts])

  return (<Search
      concerts={concerts}
      allConcerts={propConcerts}
      changer={changer}
      inputsValues={
        [
          place,
          band,
          dateStart,
          dateEnd,
          ticketNumber
        ]}
      search={searchEvent}
  />)
}
SearchContainer.propTypes = {
  getConcerts: PropTypes.func,
  concerts: PropTypes.array,
}
>>>>>>> 7e79654... search page functionsl
export default SearchContainer;