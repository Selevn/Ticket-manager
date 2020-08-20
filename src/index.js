import AppContainer from "./js/components/App.container.jsx"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {getConcerts} from "./js/db_imitate";
import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import state from "./js/store/concerts.store.js"

import "regenerator-runtime"
import {Provider} from "react-redux";

const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(
    <BrowserRouter>
      <Provider store={state}>
        <AppContainer getConcerts={getConcerts}/>
      </Provider>
    </BrowserRouter>, wrapper) : false;
