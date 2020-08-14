import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import Schedule from "./Schedule.jsx"

const ScheduleContainer = ({getConcerts}) => {

  const [concerts, setConcerts] = useState([]);

  useEffect(() => {
    getConcerts(setConcerts)
  })

  useEffect(
      () => {
        sortConcerts()
      },
      [concerts]
  )

  const sortConcerts = () => {
    let sortedConcerts = [];
    if (concerts.length !== 0) {
      sortedConcerts = concerts.sort((a, b) => {
        if (Date.parse(a.date) < Date.parse(b.date))
          return -1
        else
          return 1
      }).filter((a) => (Date.parse(a.date) > Date.now()))
    }
    return sortedConcerts;
  }

  return (<Schedule concerts={concerts}/>)
}

ScheduleContainer.propTypes = {
  getConcerts: PropTypes.func,
}

export default ScheduleContainer;