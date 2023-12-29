import React, { useRef, useContext } from "react";

import classes from "./ProfileForm.module.css";
import CredientialsContext from "../store/credientialsContext";

const ProfileForm = () => {
  const credCtx = useContext(CredientialsContext);

  const newPasswordRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const newPassword = newPasswordRef.current.value;
    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyDNJq7ahOc6TCgjCqNQREFMXtm1ouBfZUo",
      {
        method: "POST",
        body: JSON.stringify({
          idToken: credCtx.idToken,
          password: newPassword,
          returnSecureToken: false,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
    newPasswordRef.current.value = "";
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <div className={classes.control}>
        <label htmlFor="new-password">New Password</label>
        <input type="password" id="new-password" ref={newPasswordRef} />
      </div>
      <div className={classes.action}>
        <button type="submit">Change Password</button>
      </div>
    </form>
  );
};

export default ProfileForm;
