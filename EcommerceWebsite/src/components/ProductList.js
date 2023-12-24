import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const ProductList = (props) => {
  let newProductArr = [];
  let n = 0;
  while (n < props.productsArr.length) {
    newProductArr.push([props.productsArr[n], props.productsArr[n + 1]]);
    n += 2;
  }
  return (
    <Container>
      {newProductArr.map((item) =>
        item[1] === undefined ? (
          // <ListGroup horizontal>
          //   <ListGroup.Item>
          <Row className="m-4">
            <Col>
              <h3>{item[0].title}</h3>
              <br />
              <img src={item[0].imageUrl} alt={item[0].title} />
              <br />
              {item[0].price}
              {/* </ListGroup.Item>
          </ListGroup> */}
            </Col>
          </Row>
        ) : (
          // <ListGroup horizontal>
          //   <ListGroup.Item>
          <Row className="m-4">
            <Col>
              <h3>{item[0].title}</h3>
              <br />
              <img src={item[0].imageUrl} alt={item[0].title} />
              <br />
              {item[0].price}
              {/* </ListGroup.Item>
              <ListGroup.Item> */}
            </Col>
            <Col>
              <h3>{item[1].title}</h3>
              <br />
              <img src={item[1].imageUrl} alt={item[1].title} />
              <br />
              {item[1].price}
              {/* </ListGroup.Item>
            </ListGroup> */}
            </Col>
          </Row>
        )
      )}
    </Container>
  );
};

export default ProductList;