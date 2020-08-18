import React from 'react'
import PropTypes from 'prop-types';
import {Route, Switch, Redirect} from "react-router-dom";

import HomeContainer from "../../Home/Home.container.jsx";
import Search from "../../Search/Search.jsx";
import Schedule from "../../Schedule/Schedule.jsx";
import ContactsContainer from "../../Contacts/Contacts.container.jsx";

const Body = props => (
    <div>
      <br/>
      Body
      <br/>
      <Switch>
        <Route exact path='/home' component={() => <HomeContainer getConcerts={props.getConcerts}/>}/>
        <Route exact path='/search' component={Search}/>
        <Route exact path='/schedule' component={Schedule}/>
        <Route exact path='/contacts' component={ContactsContainer}/>
        <Redirect from="/" to='/home'/>
      </Switch>
    </div>
)
Body.propTypes = {
  getConcerts: PropTypes.func,
}


export default Body;