import React, { useContext } from "react";

import { Button, Col, Container, Row } from "react-bootstrap";
import CartContext from "../store/cartContext";
import { Link } from "react-router-dom";

const ProductList = (props) => {
  let newProductArr = [];
  let n = 0;
  while (n < props.productsArr.length) {
    newProductArr.push([props.productsArr[n], props.productsArr[n + 1]]);
    n += 2;
  }

  const cartCtx = useContext(CartContext);

  const addToCartHandler = (item) => {
    cartCtx.addProduct(item.key, item.title, item.price, item.imageUrl);
  };

  return (
    <Container>
      {newProductArr.map((item) =>
        item[1] === undefined ? (
          // <ListGroup horizontal>
          //   <ListGroup.Item>
          <Row className="m-4">
            <Col>
              <Link to={`/${item[0].key}`}>
                <h3>{item[0].title}</h3>
                <br />
                <img src={item[0].imageUrl} alt={item[0].title} />
                <br />
                Rs. {item[0].price} <br />
              </Link>
              <Button onClick={addToCartHandler.bind(null, { ...item[0] })}>
                Add to Cart
              </Button>
              {/* </ListGroup.Item>
          </ListGroup> */}
            </Col>
          </Row>
        ) : (
          // <ListGroup horizontal>
          //   <ListGroup.Item>
          <Row className="m-4">
            <Col>
              <Link to={`/${item[0].key}`}>
                <h3>{item[0].title}</h3>
                <br />
                <img src={item[0].imageUrl} alt={item[0].title} />
                <br />
                Rs. {item[0].price} <br />
              </Link>
              <Button onClick={addToCartHandler.bind(null, { ...item[0] })}>
                Add to Cart
              </Button>
              {/* </ListGroup.Item>
              <ListGroup.Item> */}
            </Col>
            <Col>
              <Link to={`/${item[1].key}`}>
                <h3>{item[1].title}</h3>
                <br />
                <img src={item[1].imageUrl} alt={item[1].title} />
                <br />
                Rs. {item[1].price} <br />
              </Link>
              <Button onClick={addToCartHandler.bind(null, { ...item[1] })}>
                Add to Cart
              </Button>
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
