import React, {useState, useEffect, useCallback, useRef} from 'react';
import PropTypes from "prop-types"

import Home from './Home.jsx'

import { useHistory } from "react-router-dom";


const HomeContainer = ({concerts, getConcerts}) => {


  const [inputText, setInputText] = useState("");
  const [helpList, setHelpList] = useState([]);
  const [recent, setRecent] = useState([]);

  const history = useHistory();

  useEffect(
      () => {
        getConcerts()
      }
  )
  useEffect(
      findThreeNearest
      ,
      [concerts]
  )

  useEffect(
      () => {
        document.addEventListener("click", clickOutsideDetector)
      }
  )

  function clickOutsideDetector(event) {
    if (!(event.target.tagName === "ul" || event.target.tagName === "a" || event.target.tagName === "input")) {
      setInputText("");
      setHelpList([]);
    }
  }


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


  function onInputChange() {
    setInputText(inputRef.current.value);
    setHelpList(similarConcerts(inputRef.current.value));
  }

  const inputRef = useRef(null);

  //HOWTO
  /*useEffect(
      ()=>{
        inputRef.current.addEventListener('click',onInputChange)
      },
      []
  )
*/

  function onSearch() {

    if (helpList[0]) {
      history.push('/concert/'+helpList[0].id)
    }
  }
  function keyPress(e) {
    if(e.keyCode === 13 && helpList[0]){
      history.push('/concert/'+helpList[0].id)
    }
  }



  return (
      <Home searchText={inputText}
            onInputChange={onInputChange}
            concerts={helpList}
            upcomingConcerts={recent}
            onSearch={onSearch}
            onEnterSearch={keyPress}
            inputRef={inputRef}
      />
  )
}

HomeContainer.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func,
  getConcerts: PropTypes.func,
  recent: PropTypes.array,
  history: PropTypes.array,
}


export default HomeContainer;