import React from 'react'
import PropTypes from "prop-types"
import {Route, Switch, Redirect} from "react-router-dom";

import HomeContainer from "../../Home/Home.wrapper.jsx";
import Search from "../../Search/Search.jsx";
import Schedule from "../../Schedule/Schedule.jsx";
import Contacts from "../../Contacts/Contacts.jsx";
import ConcertContainer from "../../Concert/Concert.container.jsx";

const Body = props => (
    <div>
      <Switch>
        <Route exact path='/home' component={() => <HomeContainer />}/>{/*getConcerts={props.getConcerts}*/}
        <Route exact path='/search' component={Search}/>
        <Route exact path='/schedule' component={Schedule}/>
        <Route exact path='/contacts' component={Contacts}/>
        <Route path='/concert/:id' component={() => <ConcertContainer getConcerts={props.getConcerts}/>}/>
        <Redirect exact from="/" to='/home'/>
      </Switch>
    </div>
)

Body.propTypes = {
  getConcerts: PropTypes.func,
}


export default Body;