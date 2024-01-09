import React from "react";

import { Editor } from "react-draft-wysiwyg";
import { convertFromRaw, EditorState } from "draft-js";

const InboxList = (props) => {
  return (
    <>
      <h2>Inbox</h2>
      <ul>
        {props.mailList.map((item) => {
          try {
            // const itemContent = item[1].content;
            // const contentState = convertFromRaw([itemContent]);
            // const editorState = EditorState.createWithContent(contentState);
            return (
              <li key={item[0]}>
                <ul>
                  <li>From: {item[1].from}</li>
                  <li>Subject: {item[1].header}</li>
                  {/* <li>
                    <Editor
                      toolbarHidden
                      editorState={editorState}
                      readOnly={true}
                    />
                  </li> */}
                </ul>
              </li>
            );
          } catch {
            return <li></li>;
          }
        })}
      </ul>
    </>
  );
};

export default InboxList;
