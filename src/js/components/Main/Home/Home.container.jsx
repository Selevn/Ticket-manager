import React, {useState, useEffect, useCallback, useRef} from 'react';
import PropTypes from "prop-types"

import Home from './Home.jsx'

import {useHistory} from "react-router-dom";


const HomeContainer = ({concerts, getConcerts}) => {


  const [inputText, setInputText] = useState("");
  const [helpList, setHelpList] = useState([]);
  const [recent, setRecent] = useState([]);

  const [soonCount, setSoonCount] = useState(3);

  const inputRef = useRef(null);


  const history = useHistory();

  useEffect(
    () => {
      getConcerts()
    }, [getConcerts]
  )

  const slowScroll = useCallback(
    (el) => {
      el.scrollIntoView({block: "end", behavior: 'smooth'});
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [soonCount]
  );

  useEffect(
    () => {
      if (concerts.length > soonCount) {
        let outArr = []
        for (let i = 0; i < soonCount; i++) {
          outArr.push(concerts[i])
        }
        setRecent(outArr);
      }
    },
    [soonCount, concerts]
  )

  useEffect(
    () => {
      document.addEventListener("click", clickOutsideDetector)
    }, []
  )

  function clickOutsideDetector(event) {
    if (!(event.target.tagName === "ul" || event.target.tagName === "a" || event.target.tagName === "input")) {
      setInputText("");
      setHelpList([]);
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

  const showMore = () => {
    setSoonCount(i => i + 3)
    setTimeout(() => {
      slowScroll(document.getElementById("mainContainerRef"));
    }, 20)
  }


  function onInputChange() {
    setInputText(inputRef.current.value);
    setHelpList(similarConcerts(inputRef.current.value));
  }


  function onSearch() {
    if (helpList[0]) {
      history.push('/concert/' + helpList[0].id)
    }
  }

  function keyPress(e) {
    if (e.keyCode === 13 && helpList[0]) {
      history.push('/concert/' + helpList[0].id)
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
          showMore={showMore}
          concertInBaseCount={concerts.length}
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