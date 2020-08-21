import React from 'react'
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from "react-router-dom";

import HomeContainer from "../../Home/Home.container.jsx";
import Schedule from "../../Schedule/Schedule.jsx";
import Contacts from "../../Contacts/Contacts.jsx";
import SearchContainer from "../../Search/Search.container.jsx";

const Body = props => (
    <>
      <Switch>
        <Route exact path='/home' component={() => <HomeContainer getConcerts={props.getConcerts}/>}/>
        <Route exact path='/search' component={SearchContainer}/>
        <Route exact path='/schedule' component={Schedule}/>
        <Route exact path='/contacts' component={Contacts}/>
        <Redirect from="/" to='/home'/>
      </Switch>
    </>
)
Body.propTypes = {
  getConcerts: PropTypes.func,
}


export default Body;