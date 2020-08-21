import React from 'react'
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from "react-router-dom";

import HomeContainer from "../../Home/Home.container.jsx";
import ScheduleContainer from "../../Schedule/Schedule.wrapper.jsx";
import SearchContainer from "../../Search/Search.container.jsx";
import ContactsContainer from "../../Contacts/Contacts.container.jsx";
const Body = props => (
    <>
      <Switch>
        <Route exact path='/home' component={() => <HomeContainer getConcerts={props.getConcerts}/>}/>
        <Route exact path='/search' component={SearchContainer}/>
        <Route exact path='/schedule' component={() => (<ScheduleContainer getConcerts={props.getConcerts}/>)}/>
        <Route exact path='/contacts' component={ContactsContainer}/>
        <Redirect from="/" to='/home'/>
      </Switch>
    </>
)
Body.propTypes = {
  getConcerts: PropTypes.func,
}


export default Body;