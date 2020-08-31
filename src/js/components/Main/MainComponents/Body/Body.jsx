import React from 'react'
import PropTypes from "prop-types"
import {Route, Switch, Redirect} from "react-router-dom";


import HomeContainer from "../../Home/Home.wrapper.jsx";
import HallContainer from "../../Hall/Hall.wrapper.jsx";
import ScheduleContainer from "../../Schedule/Schedule.wrapper.jsx";
import SearchContainer from "../../Search/Search.container.jsx";
import ContactsContainer from "../../Contacts/Contacts.container.jsx";
import ConcertContainer from "../../Concert/Concert.container.jsx";

const Body = props => (

    <>
        <Switch>
            <Route exact path='/home' component={() => <HomeContainer/>}/>
            <Route exact path='/search' component={SearchContainer}/>
            <Route exact path='/schedule' component={() => (<ScheduleContainer getConcerts={props.getConcerts}/>)}/>
            <Route exact path='/contacts' component={ContactsContainer}/>
            <Route path='/concert/:id' component={() => <ConcertContainer getConcerts={props.getConcerts}/>}/>
            <Route path='/hall/:id' component={() => <HallContainer/>}/>
            <Redirect from="/" to='/home'/>
        </Switch>
    </>
)

Body.propTypes = {
    getConcerts: PropTypes.func,
}


export default Body;