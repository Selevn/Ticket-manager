import {actionGetAllConcertsSorted} from "../../../actions/concerts.actions.js";

import Container from "./Schedule.container.jsx"
import {connect} from "react-redux";

const mapStateToProps = (state) => {
  return ({
    concerts: state.concertList
  })
}
const mapDispatchToProps = (dispatch) => ({
  getConcerts: () => {
    dispatch(actionGetAllConcertsSorted())
  }
})


const Wrapper = connect(mapStateToProps, mapDispatchToProps)(Container)

export default Wrapper;