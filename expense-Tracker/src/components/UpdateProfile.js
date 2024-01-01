import React, { useContext, useRef } from "react";
import { Button } from "react-bootstrap";

import AuthContext from "../store/authContext";

const UpdateProfile = () => {
  const nameRef = useRef();
  const photoRef = useRef();

  const authCtx = useContext(AuthContext);

  const submitHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const photo = photoRef.current.value;

    const res = await fetch("https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD73Oj20xEgcVTp_n7OuZuKlYiMVjXQy-8", {
        method: "POST", 
        body: JSON.stringify({
            idToken: authCtx.idToken,
            displayName: name,
            photoUrl: photo,
            deleteAttribute: null,
            returnSecureToken: true,
        }),
        headers: {
            "Content-Type": "application/json",
        }
    });
    const data = await res.json();
    console.log(data);
  };

  return (
    <form style={{ textAlign: "center" }} onSubmit={submitHandler}>
      <label htmlFor="name">Full Name</label>
      <br />
      <input type="text" id="name" ref={nameRef} required />
      <br />
      <label htmlFor="photo">Profile Photo URL</label>
      <br />
      <input type="text" id="photo" ref={photoRef} required />
      <br />
      <Button className="my-3" type="submit">Update</Button>
    </form>
  );
};

export default UpdateProfile;
