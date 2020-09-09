/*import {getConcerts} from "../db_imitate.js";*/
import {ACTION_PUT_CONCERTS} from "../constants/concerts.constants.js"
import {backendUrl} from "../../../config/default.json";

//TODO:fix async error
const getConcerts = async (cb) => {
  let method = "POST",
      body = null,
      headers = {};
  const response = await fetch(backendUrl + "/api/concerts/getAllConcerts", {method, body, headers})
  const data = await response.json()
  cb(data)
  if (!response.ok) {
    throw new Error(data.message || "Что-то пошло не так")
  }
}


const actionGetAllConcerts = () => (dispatch) => {
  getConcerts((getedConcerts) => {
    dispatch(actionPutConcerts(getedConcerts))
  })
}

const actionPutConcerts = (concert) => ({
  type: ACTION_PUT_CONCERTS,
  concerts: concert,
})

const actionGetAllConcertsSorted = () => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.sort((a, b) => (new Date(a.date) - new Date(b.date)))
    dispatch(actionPutConcerts(getedConcerts))
  })
}

const actionGetById = (id) => (dispatch) => {
  getConcerts((getedConcerts) => {
    getedConcerts = getedConcerts.filter((item) => {
      return Number(item.id) === Number(id)
    })
    dispatch(actionPutConcerts(getedConcerts))
  })
}

export {actionGetAllConcerts, actionGetAllConcertsSorted, actionGetById, actionPutConcerts}
