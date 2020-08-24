import {ACTION_PUT_HALLS} from "../constants/halls.constants.js";

import {getHalls, getConcerts} from "../db_imitate.js";

export const getHallsFromDb = () => dispatch => {
  getHalls((halls) => {
    dispatch(actionPutHalls(halls))
  })
}

export const actionGetAllHalls = () => (dispatch) => {
  getHalls((getedHalls) => {
    dispatch(actionPutHalls(getedHalls))
  })
}


export const actionPutHalls = (hall) => ({
  type: ACTION_PUT_HALLS,
  halls: hall,
})
