import React from 'react'
import PropTypes from "prop-types"

const Home = props => {
  return (<div>
    <h3>Home</h3>
    <input type="text" value={props.searchText} onChange={props.onInputChange}/>
    {/*подсказка при наборе*/}
    <div className="tip">
      <ul>
        {props.concerts.map((item, index) => <li key={index}>{item.band}</li>)}
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