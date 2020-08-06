import React from 'react'
import {Route, Switch} from "react-router-dom";

import HomeContainer from "../../Home/Home.container.jsx";
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
                <Route exact path='/' component={()=><HomeContainer getConcerts={props.getConcerts} />} />
                <Route exact path='/search' component={Search}/>
                <Route exact path='/schedule' component={Schedule}/>
                <Route exact path='/contacts' component={Contacts}/>
            </Switch>
        </div>
    )

}

export default Body;