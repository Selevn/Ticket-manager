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