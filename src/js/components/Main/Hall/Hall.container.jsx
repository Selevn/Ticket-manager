import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from "prop-types"

import Hall from './Hall.jsx'

import { useHistory } from "react-router-dom";

import {useParams} from "react-router";


const HallContainer = ({concerts, halls, getConcerts, getHalls}) => {

  const globalId = useParams();

  let [hall, setHall] = useState({});

  useEffect(() => {
    getHalls();

  },[globalId.id])


  useEffect(() => {

    setHall(halls.filter((item)=>(Number(item.id)===Number(globalId.id)))[0])
  },[globalId.id])



  useEffect(
      ()=>{getConcerts(hall.place);
      }
      ,[hall]
  )

  return (
      <Hall
          hall={hall}
          concerts={concerts}
          halls={halls}
      />
  )
}

HallContainer.propTypes = {
  concerts: PropTypes.array,
  halls: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func,
  getConcerts: PropTypes.func,
  getHalls: PropTypes.func,
  recent: PropTypes.array,
  history: PropTypes.array,
}


export default HallContainer;