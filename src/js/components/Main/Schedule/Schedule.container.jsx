import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import Schedule from "./Schedule.jsx"

const ScheduleContainer = ({getConcerts, concerts}) => {


  useEffect(() => {
    getConcerts()
  })


  return (<Schedule concerts={concerts}/>)
}

ScheduleContainer.propTypes = {
  getConcerts: PropTypes.func,
  concerts: PropTypes.array,
}

export default ScheduleContainer;