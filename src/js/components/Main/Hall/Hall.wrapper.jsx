import {connect} from "react-redux";

import container from "./Hall.container.jsx"
import {actionGetByHall} from "../../../actions/concerts.actions.js";
import {actionGetAllHalls} from "../../../actions/halls.actions.js";

const mapStateToProps = (state) => {
    return {concerts: state.concertList, halls: state.hallList}
}

const mapDispatchToProps = dispatch => {
    return {
        getConcerts: (hall) => {
            dispatch(actionGetByHall(hall))
        },
        getHalls: () => {
            dispatch(actionGetAllHalls())
        },

    }
}
const WrappedComponent = connect(mapStateToProps, mapDispatchToProps)(container);

export default WrappedComponent;