import {actionGetAllConcertsSorted} from "../../../actions/concerts.actions.js";
import {connect} from "react-redux";

import container from "./Home.container.jsx"

const mapStateToProps = (state) => {
  return {concerts: state.concertList}
}
const mapDispatchToProps = dispatch => {
  return {
    getConcerts: () => {
      dispatch(actionGetAllConcertsSorted())
    },
  }
}
const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(container);

export default WrappedComponent;