import {ACTION_PUT_CONCERTS} from "../constants/concerts.constants.js"
import {backendUrl} from "../../../config/default.json";

const getConcerts = (cb) => {
  let method = "POST",
      body = null,
      headers = {};
  new Promise((res, rej) =>
      fetch(backendUrl + "/api/concerts/getAllConcerts", {method, body, headers})
          .then(response => {
            response.json().then(data => cb(data))
          })
  )
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
