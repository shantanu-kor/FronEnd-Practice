import React, { useEffect, useState } from "react";
import { Col, Row, Navbar, Container, Button } from "react-bootstrap";
import InboxList from "./InboxList";

const NavBar = (props) => {
  const [showInbox, setShowInbox] = useState(false);

  const [mailList, setMailList] = useState([]);

  const {composeMailStatus, setComposeMailStatus} = {...props};
  useEffect(() => {
    const setInboxFn = async () => {
      if (showInbox) {
        setComposeMailStatus();
        const email = localStorage.getItem("email");
        const res = await fetch(
          `https://mailbox-client-7b1e9-default-rtdb.asia-southeast1.firebasedatabase.app/received${email}.json`
        );
        let data = await res.json();
        try {
          data = Array.from(Object.entries(data));
        } catch {
          data = [[],];
        }
        setMailList(data);
      }
    };
    setInboxFn();
  }, [showInbox, composeMailStatus, setComposeMailStatus]);
  const showInboxToggleHandler = (event) => {
    event.preventDefault();
    setShowInbox((prevState) => !prevState);
  };
  return (
    <Navbar>
      <Container>
        <Row>
          <Col>
            <Button onClick={showInboxToggleHandler}>Inbox</Button>
          </Col>
          <Col>{showInbox && <InboxList mailList={mailList} />}</Col>
        </Row>
      </Container>
    </Navbar>
  );
};

export default NavBar;
