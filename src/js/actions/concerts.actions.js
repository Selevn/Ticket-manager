import {getConcerts} from "../db_imitate.js";
import {ACTION_PUT_CONCERTS} from "../constants/concerts.constants.js"

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
        getedConcerts = getedConcerts.filter((a) => {
            a.id === id
        })
        dispatch(actionPutConcerts(getedConcerts))
    })
}

export {actionGetAllConcerts, actionGetAllConcertsSorted, actionGetById, actionPutConcerts}
