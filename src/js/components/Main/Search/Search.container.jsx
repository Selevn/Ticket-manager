import React, {useEffect, useState} from 'react'

import Search from "./Search.jsx"
import PropTypes from "prop-types";

const SearchContainer = ({getConcerts, concerts: propConcerts}) => {

  const [place, setPlace] = useState("");
  const [band, setBand] = useState("");
  const [dateStart, setDateStart] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [ticketNumber, setTicketNumber] = useState("");
  const [concerts, setConcerts] = useState([]);

  const searchEvent = useEffect(() => {
    setConcerts(propConcerts
      .filter((item) => (place ? item.place === place : true))
      .filter((item) => (band ? item.band.toUpperCase().indexOf(band.toUpperCase()) !== -1 : true))
      .filter((item) => (dateStart ? new Date(item.date) > new Date(dateStart) : true))
      .filter((item) => (dateEnd ? new Date(item.date) < new Date(dateEnd) : true))
      .filter((item) => (ticketNumber ? (item.totalSeats - item.busySeats >= ticketNumber) : true)))
  }, [place, band, dateEnd, dateStart, ticketNumber, propConcerts])

  const changer = (event) => {
    switch (event.target.name) {
      case 'place': {
        setPlace(event.target.value)
        break;
      }
      case 'band': {
        setBand(event.target.value)
        break;
      }
      case 'startDate': {
        setDateStart(new Date(event.target.value).toISOString().slice(0, 10))
        break;
      }
      case 'endDate': {
        setDateEnd(new Date(event.target.value).toISOString().slice(0, 10))
        break;
      }
      case 'ticketNumber': {
        setTicketNumber(event.target.value)
        break;
      }
    }
  }

  const reset = () => {
    setPlace("");
    setBand("");
    setDateStart("");
    setDateEnd("");
    setTicketNumber("");
    setConcerts([]);
    setConcerts(propConcerts)
  }


  useEffect(() => {
    getConcerts()
  }, [getConcerts])
  useEffect(() => {
    setConcerts(propConcerts)
  }, [propConcerts])

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
    reset={reset}
  />)
}
SearchContainer.propTypes = {
  getConcerts: PropTypes.func,
  concerts: PropTypes.array,
}
export default SearchContainer;