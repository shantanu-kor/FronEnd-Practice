import React, { useRef } from "react";

const AddMovieForm = (props) => {
  const titleRef = useRef();
  const openingTextRef = useRef();
  const releaseDateRef = useRef();
  const onSubmitHandler = (event) => {
    event.preventDefault();
    props.onSubmit(
      titleRef.current.value,
      openingTextRef.current.value,
      releaseDateRef.current.value
    );
    titleRef.current.value = "";
    openingTextRef.current.value = "";
    releaseDateRef.current.value = "";
  };
  return (
    <form onSubmit={onSubmitHandler}>
      <label htmlFor="title">Title</label>
      <br />
      <input type="text" id="title" ref={titleRef} required />
      <br />
      <label htmlFor="openingText">Opening Text</label>
      <br />
      <input type="text" id="openingText" ref={openingTextRef} required />
      <br />
      <label htmlFor="releaseDate">Release Date</label>
      <br />
      <input type="text" id="releaseDate" ref={releaseDateRef} required />
      <br />
      <button type="submit">Add Movie</button>
    </form>
  );
};

export default AddMovieForm;
