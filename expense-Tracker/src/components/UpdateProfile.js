import React, { useContext, useEffect, useRef } from "react";
import { Button } from "react-bootstrap";

import AuthContext from "../store/authContext";

const UpdateProfile = () => {
  const nameRef = useRef();
  const photoRef = useRef();

  const authCtx = useContext(AuthContext);

  useEffect(() => {
    async function getData() {
      const res = await fetch(
        "https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=AIzaSyD73Oj20xEgcVTp_n7OuZuKlYiMVjXQy-8",
        {
          method: "POST",
          body: JSON.stringify({
            idToken: authCtx.idToken,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      let data = await res.json();
      data = data.users[0];
      nameRef.current.value = data.displayName;
      photoRef.current.value = data.photoUrl;
    }
    getData();
  }, [authCtx.idToken]);

  const submitHandler = async (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const photo = photoRef.current.value;

    await fetch(
      "https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyD73Oj20xEgcVTp_n7OuZuKlYiMVjXQy-8",
      {
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
        },
      }
    );
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
      <Button className="my-3" type="submit">
        Update
      </Button>
    </form>
  );
};

export default UpdateProfile;
