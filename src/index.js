import AppContainer from "./js/components/App.container.jsx"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {getConcerts} from "./js/db_imitate";
import React from "react";

import mainStore from "./js/store/concerts.store.js"

import {Provider} from "react-redux";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import "regenerator-runtime"

const wrapper = document.getElementById("root");

wrapper ? ReactDOM.render(
    <BrowserRouter>
      <Provider store={mainStore}>
        <AppContainer getConcerts={getConcerts}/>
      </Provider>
    </BrowserRouter>, wrapper) : false;