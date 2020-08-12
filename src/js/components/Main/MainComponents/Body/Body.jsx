import React from 'react'
import {Route, Switch, Redirect} from "react-router-dom";

import HomeContainer from "../../Home/Home.container.jsx";
import Search from "../../Search/Search.jsx";
import Schedule from "../../Schedule/Schedule.jsx";
import Contacts from "../../Contacts/Contacts.jsx";
import ConcertContainer from "../../Concert/Concert.container.jsx";

function Body(props) {
  return (
      <div>
        <Switch>

          <Route exact path='/home' component={() => <HomeContainer getConcerts={props.getConcerts}/>}/>
          <Route exact path='/search' component={Search}/>
          <Route exact path='/schedule' component={Schedule}/>
          <Route exact path='/contacts' component={Contacts}/>
          <Route path='/concert/:id' component={() => <ConcertContainer getConcerts={props.getConcerts}/>}/>
          <Redirect exact from="/" to='/home' />
        </Switch>
      </div>
  )

}

export default Body;