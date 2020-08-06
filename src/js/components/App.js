import PropTypes from 'prop-types';
import React from "react";
import {Switch, Route} from 'react-router-dom';
import Main from "./Main/Main.jsx";
import Admin from "./Admin/Admin.jsx";
import Login from "./Login/Login.jsx";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return (<div>
            <Switch>
                <Route path='/admin' component={Admin}/>
                <Route path='/login' component={Login}/>
                <Route path='/' component={() => <Main getConcerts={this.props.getConcerts}/>}/>
            </Switch>
        </div>)
    }

}

App.propTypes = {
    getConcerts: PropTypes.func
}

export default App;


