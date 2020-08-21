import {createStore, applyMiddleware} from "redux";
import thunk from 'redux-thunk';

import {composeWithDevTools} from 'redux-devtools-extension';

import rootReducer from "../reducers/concerts.reducer.js"

const mainStore = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));


export default concertsStore;
