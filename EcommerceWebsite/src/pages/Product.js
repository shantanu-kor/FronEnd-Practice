import React from "react";
import { Container, Row, Col } from "react-bootstrap";

import { Link, useParams } from "react-router-dom";

const ProductPage = () => {
  const params = useParams();

  const item = JSON.parse(localStorage.getItem(params.productId));

  return (
    <React.Fragment>
      <h1 style={{ textAlign: "center" }}>{item.title}</h1>
      <Container>
        <Row>
          <Col>
            <img
              src={item.imageUrl}
              alt={item.title}
              style={{ textAlign: "center" }}
            />
          </Col>
          <Col className="mt-5">
            <h2>Description: This is a product with name {item.title}.</h2>
            <h3>Reviews: The reviews are displayed here.</h3>
          </Col>
        </Row>
      </Container>
      <h2 style={{ textAlign: "center" }}>Price: Rs. {item.price}</h2><br /><br />
      <div style={{ textAlign: "center" }}>
        <Link to="/store"><h4>Back to Store</h4></Link>
      </div>
    </React.Fragment>
  );
};

export default ProductPage;
