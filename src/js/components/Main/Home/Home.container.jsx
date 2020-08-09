import React, {useState, useEffect} from 'react';
import Home from './Home.jsx'


function HomeContainer(props) {

  const [inputText, setInputText] = useState("");
  const [concerts, setConcerts] = useState([]);
  const [helpList, setHelpList] = useState([]);

  useEffect(() => {
    props.getConcerts(getConcerts)
  });

  function getConcerts(concerts) {
    setConcerts(concerts)
  }


  function similarConcerts(val) {
    if (val.length > 1) {
      return val ?
          concerts.filter((i) => i.band.toUpperCase().includes(val.toUpperCase())) :
          []
    } else {
      return val ?
          concerts.filter((i) => i.band.toUpperCase().startsWith(val.toUpperCase())) :
          []
    }
  }

  function onInputChange(event) {
    setInputText(event.target.value);
    setHelpList(similarConcerts(event.target.value));
  }


  return (
      <Home searchText={inputText} onInputChange={onInputChange} concerts={helpList}/>)

}

export default HomeContainer;