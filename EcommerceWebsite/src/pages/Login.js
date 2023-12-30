import React, { useRef, useContext } from "react";

import AuthContext from "../store/authContext";

const LoginPage = () => {
  const emailRef = useRef();
  const passwordRef = useRef();

  const authCtx = useContext(AuthContext);

  const onSubmitHandler = (event) => {
    event.preventDefault();

    const enteredEmail = emailRef.current.value;
    const enteredPassword = passwordRef.current.value;

    fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDNJq7ahOc6TCgjCqNQREFMXtm1ouBfZUo",
      {
        method: "POST",
        body: JSON.stringify({
          email: enteredEmail,
          password: enteredPassword,
          returnSecureToken: true,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    ).then((res) => {
      if (res.ok) {
        return res.json().then((data) => {
          authCtx.addIdToken(data.idToken, enteredEmail);
        });
      } else {
        return res.json().then((data) => {
          let errorMessage = "Authentication Failed";
          if (data && data.error && data.error.message) {
            errorMessage = data.error.message;
          }
          alert(errorMessage);
        });
      }
    });
    emailRef.current.value = "";
    passwordRef.current.value = "";
  };

  return (
    <form onSubmit={onSubmitHandler} style={{ textAlign: "center" }}>
      <label htmlFor="email">Email</label>
      <br />
      <input type="email" id="email" ref={emailRef} required />
      <br />
      <label htmlFor="password">Password</label>
      <br />
      <input type="password" id="password" ref={passwordRef} required />
      <br />
      <br />
      <button type="submit">LogIn</button>
    </form>
  );
};

export default LoginPage;
