import React, {useState, useEffect, useCallback} from 'react';
import PropTypes from "prop-types"

import Home from './Home.jsx'


const HomeContainer = props => {

  const [inputText, setInputText] = useState("");
  const [concerts, setConcerts] = useState([]);
  const [helpList, setHelpList] = useState([]);
  const [recent, setRecent] = useState([]);

  useEffect(
      () => {
        props.getConcerts(setConcerts)
      },
      [props]
  )
  useEffect(
      findThreeNearest
      ,
      [concerts]
  )


  function findThreeNearest() {
    if (concerts.length !== 0) {
      let sortedConcerts = concerts.sort((a, b) => {
        if (Date.parse(a.date) < Date.parse(b.date))
          return -1
        else
          return 1
      })
      let outArr = []
      for (let i in sortedConcerts) {
        if (Date.parse(sortedConcerts[Number(i)].date) > Date.now()) {
          outArr.push(sortedConcerts[Number(i) + 2])
          outArr.push(sortedConcerts[Number(i) + 1])
          outArr.push(sortedConcerts[Number(i)])
          setRecent(outArr);
          break;
        }
      }
    }

  }


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


  const onFocusOut = () => {
    setTimeout(
        () => {
          setInputText("");
          setHelpList([]);
        },
        200)

  }


  function onInputChange(event) {
    setInputText(event.target.value);
    setHelpList(similarConcerts(event.target.value));
  }

  return (
      <Home searchText={inputText} onInputChange={onInputChange} concerts={helpList} recent={recent}
            onFocusOut={onFocusOut}/>
  )
}

HomeContainer.propTypes = {
  concerts: PropTypes.func,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func,
  getConcerts: PropTypes.func,
  recent: PropTypes.array,
  onFocusOut: PropTypes.func,
}


export default HomeContainer;