import React, {useEffect} from 'react'
import PropTypes from 'prop-types';
import Schedule from "./Schedule.jsx"

const ScheduleContainer = (/*{getConcerts, concerts}*/props) => {


    useEffect(() => {
        props.getConcerts()
    })


    return (<Schedule concerts={props.concerts}/>)
}

ScheduleContainer.propTypes = {
    getConcerts: PropTypes.func,
    concerts: PropTypes.array,
}

export default ScheduleContainer;