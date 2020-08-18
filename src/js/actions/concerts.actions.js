import {ACTION_GET_ALL_CONCERTS, ACTION_PUT_CONCERTS} from "../constants/concerts.constants"

import {getConcerts} from "../db_imitate.js";

const actionPutConcerts = (concert) => ({
  type: ACTION_PUT_CONCERTS,
  concerts: concert,
})

const actionGetAllConcerts = () => (dispatch) => {
  getConcerts((getedConcerts) => {
    dispatch(actionPutConcerts(getedConcerts))
  })
}

const actionGetAllConcertsSorted = () => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.sort((a, b) => (new Date(a.date) - new Date(b.date)))
    dispatch(actionPutConcerts(getedConcerts))
  })
}

export {actionPutConcerts, actionGetAllConcerts, actionGetAllConcertsSorted}



