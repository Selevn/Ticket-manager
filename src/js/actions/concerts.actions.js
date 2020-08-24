import {getConcerts} from "../db_imitate.js";
import {ACTION_PUT_CONCERTS} from "../constants/concerts.constants.js"

export const getConcertsFromDb = () => dispatch => {
  getConcerts((concerts) => {
    dispatch(actionPutConcerts(concerts))
  })
}

export const actionPutConcerts = (concert) => ({
  type: ACTION_PUT_CONCERTS,
  concerts: concert,
})


export const actionGetAllConcertsSorted = () => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.sort((a, b) => (new Date(a.date) - new Date(b.date)))
    dispatch(actionPutConcerts(getedConcerts))
  })
}

export const actionGetById = (id) => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.filter((a) => {
      a.id === id
    })
    dispatch(actionPutConcerts(getedConcerts))
  })
}

export const actionGetByHall = (hall) => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.filter((item)=>(item.place === hall))
    dispatch(actionPutConcerts(getedConcerts))
  })
}
/*

export {getConcertsFromDb, actionGetAllConcertsSorted, actionGetById, actionPutConcerts}
*/
