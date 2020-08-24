import {actionGetAllConcertsSorted} from "../../../actions/concerts.actions.js";
import {actionGetAllHalls} from "../../../actions/halls.actions.js";
import {connect} from "react-redux";

import container from "./Home.container.jsx"

const mapStateToProps = (state) => {
  return {concerts: state.concertList, halls:state.hallList}
}

const mapDispatchToProps = dispatch => {
  return {
    getConcerts: () => {
      dispatch(actionGetAllConcertsSorted())
    },
    getHalls: () => {
      dispatch(actionGetAllHalls())
    },

  }
}
const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(container);

export default WrappedComponent;