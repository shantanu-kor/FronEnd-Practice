import React, { useContext } from "react";
import { Button } from "react-bootstrap";

import AuthContext from "../store/authContext";

const Logout = () => {
    const AuthCtx = useContext(AuthContext);

    const logoutHandler = (event) => {
        event.preventDefault();
        AuthCtx.removeToken();
    };

    return <Button onClick={logoutHandler}>Logout</Button>
};

export default Logout;