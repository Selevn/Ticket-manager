import AppContainer from "./js/components/App.container.jsx"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {getConcerts} from "./js/db_imitate";
import React from "react";

import mainStore from "./js/store/concerts.store.js"

import {connect, Provider} from "react-redux";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import {actionGetAllConcertsSorted} from "./js/actions/concerts.actions.js";

const mapStateToProps = (state) => {
  return {concerts: state.concertList}
}
const mapDispatchToProps = dispatch => {
  return {
    getConcerts: () => {
      dispatch(actionGetAllConcertsSorted())
    }
  }
}
const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(()=>(<AppContainer getConcerts={getConcerts}/>))

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(
    <BrowserRouter>
      <Provider store={mainStore}>
        <WrappedComponent/>
      </Provider>
    </BrowserRouter>, wrapper) : false;

/*<AppContainer
    getConcerts={getConcerts}/>*/