import React, {useState, useEffect, useCallback, useRef} from 'react';
import PropTypes from "prop-types"

import Home from './Home.jsx'

import {useHistory} from "react-router-dom";


const HomeContainer = ({concerts, getConcerts}) => {


  const [inputText, setInputText] = useState("");
  const [helpList, setHelpList] = useState([]);
  const [recent, setRecent] = useState([]);
  const inputRef = React.createRef();
  const history = useHistory();
  const liRef = useRef([]);


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
    if (!(event.target.tagName === "UL" || event.target.tagName === "A" || event.target.tagName === "INPUT") && (inputText !== "")) {
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

  function onInputChange(event) {
    setInputText(event.target.value);
    setHelpList(similarConcerts(event.target.value));
  }

  function onSearch() {

    if (helpList[0]) {
      history.push('/concert/' + helpList[0].id)
    }
  }


  let currentListItem = 0;

  function keyPress(e) {
    if (e.keyCode === 13 && helpList[0]) {
      history.push('/concert/' + helpList[0].id)
    }
    if (e.keyCode === 40 && helpList[0]) {
      liRef.current[0].setAttribute("tabindex", "0")
      liRef.current[0].focus()
      currentListItem = 0;
      document.activeElement.setAttribute("tabindex", "-1")
    }
  }

  function onListNavigation(e) {
    console.log(document.activeElement)
    console.log(liRef.current[helpList.length-1])
    if (e.keyCode === 9 && helpList[0] && document.activeElement===liRef.current[helpList.length-1].firstChild) {
      setInputText("");
      setHelpList([]);
    }
    if (e.keyCode === 40) { //down
      currentListItem++;
      currentListItem === helpList.length && (currentListItem = 0);
      liRef.current[currentListItem].setAttribute("tabindex", "0")
      liRef.current[currentListItem].focus()
    }
    if (e.keyCode === 38) { //up
      currentListItem--;
      if (currentListItem === -1) {
        inputRef.current.setAttribute("tabindex", "0");
        inputRef.current.focus();
      }
      else{

        liRef.current[currentListItem].setAttribute("tabindex", "0")
        liRef.current[currentListItem].focus()

      }
    }
    if (e.keyCode === 13 && helpList[0]) {
      history.push(liRef.current[currentListItem].firstChild.attributes.href.value)
    }
  }


  return (
      <Home searchText={inputText}
            onInputChange={onInputChange}
            concerts={helpList}
            upcomingConcerts={recent}
            onSearch={onSearch}
            onEnterSearch={keyPress}
            liRef={liRef}
            onListNavigation={onListNavigation}
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
  liRef: PropTypes.object,
}


export default HomeContainer;