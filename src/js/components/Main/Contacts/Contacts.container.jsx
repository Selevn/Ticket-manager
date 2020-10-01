import Contacts from "./Contacts.jsx"
import React from "react";
import contactsStore from "../../../store/contacts.store.js"

import {actionGetAllContacts} from "../../../actions/contacts.actions.js"
import {connect, Provider} from "react-redux";

const mapStateToProps = (state) => {
  return {contacts: state.contacts}
}
const mapDispatchToProps = dispatch => {
  return {
    getContacts: () => {
      dispatch(actionGetAllContacts())
    }
  }
}


const ContactsWrapper = connect(mapStateToProps, mapDispatchToProps)(Contacts)

const ContactsContainer = () => {
  return (
    <Provider store={contactsStore}>
      <ContactsWrapper/>
    </Provider>);
}

export default ContactsContainer;