import {ACTION_GET_ALL_CONCERTS, ACTION_PUT_CONCERTS} from "../constants/concerts.constants"

import {getConcerts} from "../db_imitate.js";

const actionPutConcerts = (concert) => ({
  type: ACTION_PUT_CONCERTS,
  concerts: concert,
})

const actionGetAllConcerts = () => (dispatch) =>
{
  console.log("in actionGetAllConcerts")
  getConcerts((getedConcerts)=>{
    dispatch(actionPutConcerts(getedConcerts))
  })
}


export {actionPutConcerts, actionGetAllConcerts}



