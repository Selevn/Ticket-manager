import React, {useEffect} from 'react'

import Search from "./Search.jsx"
import PropTypes from "prop-types";

const SearchContainer = (props) => {
  useEffect(() => {
    props.getConcerts()
  }, [])
  return (<Search concerts={props.concerts}/>)
}
SearchContainer.propTypes = {
  getConcerts: PropTypes.func,
  concerts: PropTypes.array,
}
export default SearchContainer;