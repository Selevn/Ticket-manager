import App from "./js/components/App.jsx"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {getConcerts} from "./js/db_imitate";
import React from "react";

import mainStore from "./js/store/concerts.store.js"

import {Provider} from "react-redux";


import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


import "regenerator-runtime"
import {LoginContext} from "./js/components/Contexts/LoginContext.js";

const wrapper = document.getElementById("root");

wrapper ? ReactDOM.render(
  <App getConcerts={getConcerts}/>, wrapper) : false;