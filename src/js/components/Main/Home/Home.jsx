import React from 'react'


const Home = props => {
  return (<div>
    <h3>Home</h3>
    <input type="text" value={props.searchText} onChange={props.onInputChange}/>
    {/*подсказка при наборе*/}
    <div className="tip">
      <ul>
        {props.concerts.map(i => <li>{i.band}</li>)}
      </ul>
    </div>
  </div>)

}

export default Home;