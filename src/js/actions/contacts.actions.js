import {ACTION_PUT_CONTACTS} from "../constants/contacts.constants.js"

import {getContacts} from "../db_imitate.js";

const actionPutContacts = (data) => ({
    type: ACTION_PUT_CONTACTS,
    contacts: data,
})

const actionGetAllContacts = () => (dispatch) => {
    getContacts((data) => {
        dispatch(actionPutContacts(data))
    })
}


export {actionGetAllContacts, actionPutContacts}