import React, {useState, useEffect} from 'react';

import {useParams} from "react-router";


function Concert(props) {


  const globalId = useParams();

  let [concert, setConcert] = useState({});

  useEffect(() => {
    props.getConcerts(getConcert);
  })


  function getConcert(concerts) {
    let rightConcert = concerts.filter((item) => {
      return item.id === Number(globalId.id)
    });
    setConcert(rightConcert[0])
  }


  return (
      <div>
        Band: <b>{concert.band}</b>
        <br/>
        Place: <b>{concert.place}</b>
        <br/>
        Date: <b>{concert.date}</b>
        <br/>

      </div>
  )

}

export default Concert;