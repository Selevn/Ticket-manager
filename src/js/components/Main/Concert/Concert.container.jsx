import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from "prop-types"
import {withRouter} from 'react-router-dom'
import {useParams} from "react-router";
import Concert from "./Concert.jsx";


<<<<<<< HEAD

const ConcertContainer = ({getConcerts, history}) => {
=======
const ConcertContainer = ({getConcertById, concerts, history}) => {
>>>>>>> 4a769e8... Home soon bugFix, start make Ticket page

    const globalId = useParams();


    useEffect(() => {
        getConcertById(globalId.id);
    },[globalId.id])



    return (
        <Concert concert={concerts[0]}
                 back={history.goBack}
                 buy = {()=>{history.push('/tickets/'+concerts[0].id)}}/>
    )

}

ConcertContainer.propTypes = {
    getConcertById: PropTypes.func,
    concerts: PropTypes.array,
    back: PropTypes.func,
    history: PropTypes.object,
}
export default withRouter(ConcertContainer);