import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from "prop-types"

import Home from './Home.jsx'


const HomeContainer = props => {

  const [inputText, setInputText] = useState("");
  const [concerts, setConcerts] = useState([]);
  const [helpList, setHelpList] = useState([]);

  useEffect(
      () => {
        props.getConcerts(setConcerts)
      },
      [props]
  )

  const similarConcerts = useCallback(
      val => {
        if (val.length > 1) {
          return val ?
              concerts.filter((i) => i.band.toUpperCase().includes(val.toUpperCase())) :
              []
        } else {
          return val ?
              concerts.filter((i) => i.band.toUpperCase().startsWith(val.toUpperCase())) :
              []
        }
      },
      [concerts]
  );

  function onInputChange(event) {
    setInputText(event.target.value);
    setHelpList(similarConcerts(event.target.value));
  }

  return (
      <Home searchText={inputText} onInputChange={onInputChange} concerts={helpList}/>
  )
}

HomeContainer.propTypes = {
  concerts: PropTypes.func,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func,
  getConcerts: PropTypes.func
}

export default HomeContainer;