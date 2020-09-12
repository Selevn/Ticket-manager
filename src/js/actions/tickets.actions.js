import {getUserTickets} from "../../../models/tickets.js";
import {ACTION_PUT_USER_TICKETS} from "../constants/tickets.constants.js"

const actionGetUserTickets = () => (dispatch) => {
  getUserTickets((getedTickets) => {
    dispatch(actionPutTickets(getedTickets))
  })
}

const actionPutTickets = (concert) => ({
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
