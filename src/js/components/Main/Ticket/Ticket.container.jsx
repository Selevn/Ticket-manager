import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from "prop-types"
import {withRouter} from 'react-router-dom'
import {useParams} from "react-router";
import Ticket from "./Ticket.jsx";


const TicketContainer = ({history}) => {

    const globalId = useParams();

    let [concert, setConcert] = useState({});

    const getConcert = useCallback(
        (concerts) => {
            let rightConcert = concerts.filter((item) => {
                return item.id === Number(globalId.id)
            });
            setConcert(rightConcert[0])
        },
        [globalId.id]
    )


    return (
        <Ticket concert={concert} back={history.goBack}/>
    )

}

TicketContainer.propTypes = {
    getConcerts: PropTypes.func,
    back: PropTypes.func,
    history: PropTypes.object,
}
export default withRouter(TicketContainer);