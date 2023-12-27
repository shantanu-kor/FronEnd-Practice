import React, { useRef } from "react";

const ContactUsPage = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const contactRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    fetch("https://ecommercewebsite-fa621-default-rtdb.asia-southeast1.firebasedatabase.app/details.json",{
        method: "POST",
        body: JSON.stringify({
            name: nameRef.current.value,
            email: emailRef.current.value,
            contact: contactRef.current.value,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    })
    nameRef.current.value = '';
    emailRef.current.value = '';
    contactRef.current.value = '';
  };

  return (
    <form style={{ textAlign: "center" }} onSubmit={submitHandler}>
      <label htmlFor="name">Name</label>
      <br />
      <input type="text" id="name" ref={nameRef} />
      <br />
      <label htmlFor="email">eMail</label>
      <br />
      <input type="email" id="email" ref={emailRef} />
      <br />
      <label htmlFor="contact">Contact Number</label>
      <br />
      <input type="number" id="contact" ref={contactRef} />
      <br />
      <button type="submit">Submit</button>
    </form>
  );
};

export default ContactUsPage;
