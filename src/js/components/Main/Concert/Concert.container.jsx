import React, {useState, useEffect} from 'react';

import { useParams } from "react-router";
import Concert from "./Concert.jsx";



function ConcertContainer(props) {

  const globalId = useParams();

  let [concert, setConcert] = useState({});

  useEffect(()=>{props.getConcerts(getConcert);})


  function getConcert(concerts)
  {
    let rightConcert = concerts.filter((item)=>{return item.id===Number(globalId.id)});
    setConcert(rightConcert[0])
  }


  return (
      <Concert concert={concert}/>
  )

}

export default ConcertContainer;