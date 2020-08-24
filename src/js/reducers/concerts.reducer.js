import {ACTION_GET_ALL_CONCERTS, ACTION_PUT_CONCERTS} from "../constants/concerts.constants.js"
import {ACTION_PUT_HALLS, ACTION_GET_ALL_HALLS} from "../constants/halls.constants.js";

import {getConcertsFromDb} from "../actions/concerts.actions.js"
import {getHallsFromDb} from "../actions/halls.actions.js"

const initialState = {
  concertList: [],
  hallList: [],
}

const Reducer = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_GET_ALL_CONCERTS: {
      state.dispatch(getConcertsFromDb());
      break;
    }
    case ACTION_GET_ALL_HALLS: {
      state.dispatch(getHallsFromDb());
      break;
    }
    case ACTION_PUT_CONCERTS: {
      return ({...state, concertList: action.concerts})
    }
    case ACTION_PUT_HALLS: {
      return ({...state, hallList: action.halls})
    }
    default: {
      return state;
    }
  }


}

export default Reducer;