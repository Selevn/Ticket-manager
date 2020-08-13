import AppContainer from "./js/components/App.container.jsx"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {getConcerts} from "./js/db_imitate";
import React from "react";

import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<BrowserRouter><AppContainer getConcerts={getConcerts}/></BrowserRouter>, wrapper) : false;