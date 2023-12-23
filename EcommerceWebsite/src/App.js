import { Col, Container, Row } from "react-bootstrap";
import "./App.css";

function App() {
  const productsArr = [
    {
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
    },
    {
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
    },
    {
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
    },
    {
      title: "Blue Color",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%204.png",
    },
  ];

  let newProductArr = [];
  let n = 0;
  while (n < productsArr.length) {
    newProductArr.push([productsArr[n], productsArr[n + 1]]);
    n += 2;
  }
  return (
    <Container>
      {newProductArr.map((item) => (
        <Row>
          <Col>
            {item[0].title}
            <img src={item[0].imageUrl} alt={item[0].title} />
            {item[0].price}
          </Col>
          <Col>
            {item[1].title}
            <img src={item[1].imageUrl} alt={item[1].title} />
            {item[1].price}
          </Col>
        </Row>
      ))}
    </Container>
  );
}

export default App;
