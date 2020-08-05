import React from 'react'
import {Route, Switch} from "react-router-dom";

import Home from "../../Home/Home.jsx";
import Search from "../../Search/Search.jsx";
import Schedule from "../../Schedule/Schedule.jsx";
import Contacts from "../../Contacts/Contacts.jsx";

function Body(props) {
    return (
        <div>
            <br/>
            Body
            <br/>
            <Switch>
                <Route exact path='/' component={Home}/>
                <Route exact path='/search' component={Search}/>
                <Route exact path='/schedule' component={Schedule}/>
                <Route exact path='/contacts' component={Contacts}/>
            </Switch>
        </div>
    )

}

export default Body;