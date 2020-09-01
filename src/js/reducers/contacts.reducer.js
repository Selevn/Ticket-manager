import {ACTION_PUT_CONTACTS} from "../constants/contacts.constants.js"

const initialState = {
    contacts: {},
}

const reducer = (state = initialState, action) => {
    if (action.type == ACTION_PUT_CONTACTS) {
        return {...state, contacts: action.contacts};
    } else
        return state;
}

export default reducer;