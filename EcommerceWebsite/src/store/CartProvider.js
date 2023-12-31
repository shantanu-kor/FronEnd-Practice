import React, { useState, useContext, useEffect } from "react";
import CartContext from "./cartContext";
import AuthContext from "./authContext";

const CartProvider = (props) => {
  const staticproducts = [
    {
      key: 1,
      title: "Colors",
      price: 100,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%201.png",
      quantity: 2,
    },
    {
      key: 2,
      title: "Black and white Colors",
      price: 50,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%202.png",
      quantity: 3,
    },

    {
      key: 3,
      title: "Yellow and Black Colors",
      price: 70,
      imageUrl:
        "https://prasadyash2411.github.io/ecom-website/img/Album%203.png",
      quantity: 1,
    },
  ];

  const authCtx = useContext(AuthContext);

  let email = authCtx.email;

  if (email === null) {
    email = "dummy@dummy.com";
  }

  let email1 = email.split("@");
  let email2 = "";
  for (let i of email1) {
    email2 += i;
  }
  email1 = email2.split(".");
  email2 = "";
  for (let i of email1) {
    email2 += i;
  }

  const id = "071128c7f65f478ebd0382a843ba157d";
  const url = `https://crudcrud.com/api/${id}/${email2}`;

  const [products, setProducts] = useState([]);

  // if (localStorage.getItem(`cart${email}`) === null) {
  //   localStorage.setItem(`cart${email}`, JSON.stringify(products));
  // }

  useEffect(() => {
    fetch(url).then((res) => {
      res.json().then((data) => {
        if (data.length === 0) {
          fetch(url, {
            method: "POST",
            body: JSON.stringify({
              items: [],
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        } else {
          setProducts(data[0].items);
        }
      });
    });
  }, [url]);

  const removeProductHandler = (key) => {
    const itemIndex = products.findIndex((item) => item.key === key);
    let items = [...products];
    if (items[itemIndex].quantity > 1) {
      items[itemIndex] = {
        ...items[itemIndex],
        quantity: items[itemIndex].quantity - 1,
      };
    } else {
      items.splice(itemIndex, 1);
    }
    // localStorage.setItem(`cart${email}`, JSON.stringify(items));
    fetch(url).then((res) => {
      res.json().then((data) => {
        const url1 = `${url}/${data[0]._id}`;
        fetch(url1, {
          method: "PUT",
          body: JSON.stringify({
            items: items,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        });
      });
    });
    fetch(url).then((res) => {
      res.json().then((data) => {
        setProducts(data[0].items);
      });
    });
  };

  const addProductHandler = (key, title, price, imageUrl) => {
    const itemIndex = products.findIndex((item) => item.key === key);
    if (itemIndex === -1) {
      const product = {
        key: key,
        quantity: 1,
        title: title,
        price: price,
        imageUrl: imageUrl,
      };
      setProducts((prevState) => [...prevState, product]);
    } else {
      let items = [...products];
      items[itemIndex] = {
        ...items[itemIndex],
        quantity: items[itemIndex].quantity + 1,
      };
      // localStorage.setItem(`cart${email}`, JSON.stringify(items));
      fetch(url).then((res) => {
        res.json().then((data) => {
          const url1 = `${url}/${data[0]._id}`;
          fetch(url1, {
            method: "PUT",
            body: JSON.stringify({
              items: items,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          });
        });
      });
      fetch(url).then((res) => {
        res.json().then((data) => {
          setProducts(data[0].items);
        });
      });
    }
  };

  const cartProvider = {
    productList: products,
    removeProduct: removeProductHandler,
    addProduct: addProductHandler,
  };

  return (
    <CartContext.Provider value={cartProvider}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
