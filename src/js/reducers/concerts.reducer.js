import {ACTION_GET_ALL_CONCERTS, ACTION_PUT_CONCERTS} from "../constants/concerts.constants.js"
import {actionPutConcerts} from "../actions/concerts.actions.js"

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
      console.log("in actionGetAllConcerts - switch")
      state.dispatch(getConcertsFromDb());
      break;
    }
    case ACTION_PUT_CONCERTS: {
      console.log("in actionPutConcerts - switch")
      console.log("state is ");
      console.log(state);
      return ({...state, concertList: action.concerts})
    }
    default:
    {
      console.log("in default - switch")
      return state;
    }
  }


}

export default concertReducer; 