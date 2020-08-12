import React from 'react'
import {Link} from "react-router-dom";

import PropTypes from "prop-types"

const Home = props => {
  return (<div>
    <h3>Home</h3>
    <form>
      <input type="text" value={props.searchText} onChange={props.onInputChange}></input>
      <input type="button" onClick={() => {
      }} value="Поиск"/>
    </form>
    {/*подсказка при наборе*/}
    <div className="tip">
      <ul>
        {props.concerts.map((item, index) => <li key={index}><Link to={"concert/" + item.id}>{item.band}</Link></li>)}
      </ul>
    </div>
  </div>)
}

Home.propTypes = {
  concerts: PropTypes.array,
  searchText: PropTypes.string,
  onInputChange: PropTypes.func
}

export default Home;