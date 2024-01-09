import React, { useEffect, useRef, useState } from "react";

import { Editor } from "react-draft-wysiwyg";
import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { Button, Container } from "react-bootstrap";

const ComposeEmail = () => {
  const toRef = useRef();
  const subjectRef = useRef();

  const [editorState, setEditorState] = useState(() =>
    EditorState.createEmpty()
  );

  const submitHandler = async (event) => {
    event.preventDefault();
    const subject = subjectRef.current.value;
    const toList = toRef.current.value.split(" ");
    const toList1 = toList.map((item) => {
      let sitem = item.split("@");
      let item1 = "";
      sitem.forEach((item) => (item1 += item));
      sitem = item1.split(".");
      item1 = "";
      sitem.forEach((item) => (item1 += item));
      return item1;
    });
    toList1.forEach(async (email) => {
      const res = await fetch(
        `https://mailbox-client-7b1e9-default-rtdb.asia-southeast1.firebasedatabase.app/received${email}.json`,
        {
          method: "POST",
          body: JSON.stringify({
            from: localStorage.getItem("actualEmail"),
            header: subject,
            content: convertToRaw(editorState.getCurrentContent()),
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      const data = await res.json();
      if (data && data.error && data.error.message) {
        alert(data.error.message);
      }
    });
    const res = await fetch(
      `https://mailbox-client-7b1e9-default-rtdb.asia-southeast1.firebasedatabase.app/sent${localStorage.getItem(
        "email"
      )}.json`,
      {
        method: "POST",
        body: JSON.stringify({
          to: toList,
          header: subject,
          content: convertToRaw(editorState.getCurrentContent()),
        }),
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    if (data && data.error && data.error.message) {
      alert(data.error.message);
    }

    toRef.current.value = "";
    subjectRef.current.value = "";
    setEditorState(() => EditorState.createEmpty());
  };

  //   const contentState = convertFromRaw(
  //     convertToRaw(editorState.getCurrentContent())
  //   );
  //   const editorState1 = EditorState.createWithContent(contentState);

  return (
    <form
      className="my-3"
      style={{ textAlign: "center" }}
      onSubmit={submitHandler}
    >
      {/* <Editor toolbarHidden editorState={editorState1} readOnly={true} /> */}
      <label htmlFor="to" className="mx-2">
        To:
      </label>
      <input
        type="text"
        id="to"
        placeholder="Recipients"
        ref={toRef}
        required
      />
      <label htmlFor="to" className="mx-1">
        Cc/Bcc
      </label>
      <br />
      <textarea
        rows="1"
        cols="50"
        placeholder="Subject"
        className="my-2"
        ref={subjectRef}
      />
      <br />
      <Container>
      <Editor
        editorState={editorState}
        onEditorStateChange={setEditorState}
        wrapperClassName="wrapper-class"
        editorClassName="editor-class"
        toolbarClassName="toolbar-class"
      />
      </Container>
      <Button type="submit">Send</Button>
    </form>
  );
};

export default ComposeEmail;
