import React from 'react'
import {Link} from "react-router-dom";


function Home(props) {


    return (<div>
      <h3>Home</h3>
      <form>
      <input type="text" value={props.searchText} onChange={props.onInputChange}></input>
        <input type="button" onClick={()=>{}} value="Поиск" />
      </form>
      {/*подсказка при наборе*/}
      <div className="tip">
        <ul>
          {props.concerts.map(i => <li><Link to={"concert/"+i.id}>{i.band}</Link></li>)}
        </ul>
      </div>
    </div>)

}

export default Home;