import React/*, {useEffect, useState}*/ from 'react'
//import PropTypes from 'prop-types';
import Schedule from "./Schedule.jsx"

import {Provider, connect} from "react-redux"
import store from "../../../store/concerts.store.js"
import {actionGetAllConcertsSorted} from "../../../actions/concerts.actions.js"

const ScheduleContainer = () => {

 /* //TODO:do it! dev->moving_redux->provider on app ->remote+pr->approve->merge_dev->local_dev->merge with where need!*/
//git rebase??
const mapStateToProps = (state) =>{
      return {concerts:state.concertList}
}
  const mapDispatchToProps = dispatch => {
    return {
      getConcerts: () => {
        dispatch(actionGetAllConcertsSorted())
      }
    }
  }

  const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(Schedule)

  return (
      <Provider store={store}>
        <WrappedComponent/>
      </Provider>)
}

export default ScheduleContainer;