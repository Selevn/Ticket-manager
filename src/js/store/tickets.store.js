import {createStore, applyMiddleware} from "redux";
import thunk from "redux-thunk"

import reducer from "../reducers/tickets.reducer.js"
import {composeWithDevTools} from "redux-devtools-extension";

const ticketStore = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)))

export default ticketStore;