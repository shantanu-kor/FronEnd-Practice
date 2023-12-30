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
              <Link to={`/store/${item[0].key}`} style={{textDecoration: 'inherit'}}>
                <h3 style={{color: 'black'}}>{item[0].title}</h3>
                <br />
                <img src={item[0].imageUrl} alt={item[0].title} />
                <br />
              </Link>
              <Container>
                <Row>
                  <Col><h4>Rs. {item[0].price}</h4></Col>
                  <Col>
                    <Button
                      onClick={addToCartHandler.bind(null, { ...item[0] })}
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </Container>
              {/* </ListGroup.Item>
          </ListGroup> */}
            </Col>
          </Row>
        ) : (
          // <ListGroup horizontal>
          //   <ListGroup.Item>
          <Row className="m-4">
            <Col>
              <Link to={`/store/${item[0].key}`} style={{textDecoration: 'inherit'}}>
                <h3 style={{color: 'black'}}>{item[0].title}</h3>
                <br />
                <img src={item[0].imageUrl} alt={item[0].title} />
                <br />
              </Link>
              <Container>
                <Row>
                  <Col><h4>Rs. {item[0].price}</h4></Col>
                  <Col>
                    <Button
                      onClick={addToCartHandler.bind(null, { ...item[0] })}
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </Container>
              {/* </ListGroup.Item>
              <ListGroup.Item> */}
            </Col>
            <Col>
              <Link to={`/store/${item[1].key}`} style={{textDecoration: 'inherit'}}>
                <h3 style={{color: 'black'}}>{item[1].title}</h3>
                <br />
                <img src={item[1].imageUrl} alt={item[1].title} />
                <br />
              </Link>
              <Container>
                <Row>
                  <Col><h4>Rs. {item[1].price}</h4></Col>
                  <Col>
                    <Button
                      onClick={addToCartHandler.bind(null, { ...item[1] })}
                    >
                      Add to Cart
                    </Button>
                  </Col>
                </Row>
              </Container>
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
