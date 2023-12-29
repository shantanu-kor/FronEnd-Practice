import React, { useContext } from "react";
import { Link } from "react-router-dom";

import classes from "./MainNavigation.module.css";
import CredientialsContext from "../store/credientialsContext";

const MainNavigation = () => {
  const credCtx = useContext(CredientialsContext);

  const logoutHandler = () => {
    credCtx.removeIdToken();
  };

  return (
    <header className={classes.header}>
      <Link to="/">
        <div className={classes.logo}>React Auth</div>
      </Link>
      <nav>
        {credCtx.idToken ? (
          <ul>
            <li>
              <Link to="/profile">Profile</Link>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        ) : (
          <ul>
            <li>
              <Link to="/auth">Login</Link>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default MainNavigation;
