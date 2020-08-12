import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from "prop-types"
import { withRouter } from 'react-router-dom'
import {useParams} from "react-router";
import Concert from "./Concert.jsx";


function ConcertContainer(props) {

  const globalId = useParams();

  let [concert, setConcert] = useState({});

  useEffect(() => {
    props.getConcerts(getConcert);
  })


  const getConcert = useCallback(
      (concerts) => {
        let rightConcert = concerts.filter((item) => {
          return item.id === Number(globalId.id)
        });
        setConcert(rightConcert[0])
      })


  return (
      <Concert concert={concert} back={props.history.goBack}/>
  )

}

ConcertContainer.propTypes = {
  getConcerts: PropTypes.func,
  back:PropTypes.func,
  history:PropTypes.object,
}
export default withRouter(ConcertContainer);