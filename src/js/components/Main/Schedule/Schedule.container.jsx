import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types';
import Schedule from "./Schedule.jsx"

import {Provider, connect} from "react-redux"
import store from "../../../store/concerts.store.js"
import {actionGetAllConcerts} from "../../../actions/concerts.actions.js"

const ScheduleContainer = ({getConcerts}) => {

 // const [concerts, setConcerts] = useState([]);

    /*useEffect(() => {
      console.log("entering in dispatching")
      store.dispatch(actionGetAllConcerts)
      //actionGetAllConcerts();
  })*/


  /*const sortConcerts = (_concerts) => {
    let sortedConcerts = [];
    if (_concerts.length !== 0) {
      sortedConcerts = _concerts.sort((a, b) => {
        return (new Date(a.date) - new Date(b.date))
      }).filter((a) => (new Date(a.date) >   Date.now()))
      setConcerts(sortedConcerts);
    } else {
      setConcerts(_concerts)
    }
  }*/

 /* //TODO:do it! dev->moving_redux->provider on app ->remote+pr->approve->merge_dev->local_dev->merge with where need!*/
//rebase??
const mapStateToProps = (state) =>{
      return {concert2s:state.concertList}
}
  const mapDispatchToProps = dispatch => {
    return {
      getConcerts: () => {
        dispatch(actionGetAllConcerts())
      }
    }
  }

  const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(Schedule)

  return (
      <Provider store={store}>
        <WrappedComponent/>
      </Provider>)
}

ScheduleContainer.propTypes = {
  getConcerts: PropTypes.func,
}

export default ScheduleContainer;