import React from "react";
import PropTypes from "prop-types"

const Account = ({logout, token, userId}) => (<>
        <button onClick={logout}>Logout</button>
        <h3>{token}</h3>
        <h3>{userId}</h3>
    </>
)
Account.propTypes ={
    logout:PropTypes.func,
    token:PropTypes.string,
    userId:PropTypes.number,
}

export default Account