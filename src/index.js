import App from "./js/components/App.js"
import ReactDOM from "react-dom";
import {BrowserRouter} from "react-router-dom";
import {getConcerts} from "./js/db_imitate";
import React from "react";




const wrapper = document.getElementById("root");
wrapper ? ReactDOM.render(<BrowserRouter><App getConcerts={getConcerts}/></BrowserRouter>, wrapper) : false;