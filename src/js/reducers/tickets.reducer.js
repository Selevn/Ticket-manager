import {ACTION_GET_USER_TICKETS} from "../constants/tickets.constants.js"
import {actionPutConcerts} from "../actions/tickets.actions.js"

import {getConcerts} from "../db_imitate.js"

const initialState = {
  concertList: [],
}
const getConcertsFromDb = () => dispatch => {
  getConcerts((concerts) => {
    dispatch(actionPutConcerts(concerts))
  })
}

const concertReducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_ALL_CONCERTS: {
      state.dispatch(getConcertsFromDb());
      break;
    }
    case ACTION_PUT_CONCERTS: {
      return ({...state, concertList: action.concerts})
    }
    default: {
      return state;
    }
  }


}

export default concertReducer;