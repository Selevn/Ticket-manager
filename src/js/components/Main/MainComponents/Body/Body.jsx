import React from 'react'
import PropTypes from "prop-types"
import {Route, Switch, Redirect} from "react-router-dom";

  
import HomeContainer from "../../Home/Home.wrapper.jsx";
import ScheduleContainer from "../../Schedule/Schedule.wrapper.jsx";
import SearchContainer from "../../Search/Search.container.jsx";
import ContactsContainer from "../../Contacts/Contacts.container.jsx";
<<<<<<< HEAD
import ConcertContainer from "../../Concert/Concert.container.jsx";
const Body = props => (
=======
import ConcertContainer from "../../Concert/Concert.wrapper.jsx";
import AccountContainer from "../../../Account/AccountContainer.jsx";
import TicketContainer from "../../Ticket/Ticket.container.jsx";

const Body = () => (
>>>>>>> 4a769e8... Home soon bugFix, start make Ticket page

    <>
      <Switch>
        <Route exact path='/home' component={() => <HomeContainer />}/>
        <Route exact path='/search' component={SearchContainer}/>
        <Route exact path='/schedule' component={() => (<ScheduleContainer/>)}/>
        <Route exact path='/contacts' component={ContactsContainer}/>
        <Route path='/concert/:id' component={() => <ConcertContainer/>}/>
        <Route path='/tickets/:id' component={() => <TicketContainer/>}/>
        <Redirect from="/" to='/home'/>
      </Switch>
    </>
)

Body.propTypes = {
  getConcerts: PropTypes.func,
}


export default Body;