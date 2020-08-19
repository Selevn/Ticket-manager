import {ACTION_PUT_CONCERTS} from "../constants/concerts.constants.js"
import {getConcerts} from "../db_imitate.js";

const actionPutConcerts = (concert) => ({type: ACTION_PUT_CONCERTS, concerts: concert,})

const getAllConcerts = () => (dispatch) => {
  getConcerts((data) => {
    dispatch(actionPutConcerts(data))
  })
}

const actionGetAllConcertsSorted = () => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.sort((a, b) => (new Date(a.date) - new Date(b.date)))
    dispatch(actionPutConcerts(getedConcerts))
  })
}

const actionGetThreeNearest = () => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.sort((a, b) => (new Date(a.date) - new Date(b.date)))
    let outArr = [];
    if (getedConcerts.length > 2) {
      outArr.push(getedConcerts[0])
      outArr.push(getedConcerts[1])
      outArr.push(getedConcerts[2])
    } else {
      getedConcerts.forEach((item) => {
        outArr.push(item)
      })
    }
    dispatch(actionPutConcerts(outArr))
  })
}

const actionGetById = (id) => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.filter((a) => {
      a.id === id
    })
    dispatch(actionPutConcerts(getedConcerts))
  })
}

export {getAllConcerts, actionGetAllConcertsSorted, actionGetThreeNearest, actionGetById, actionPutConcerts}