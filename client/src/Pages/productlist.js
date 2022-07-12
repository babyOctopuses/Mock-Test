import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import Card from "../components/card";
import Navbar2 from "../components/Navbar2";
import "../styles/Card.css";
import axios from "axios";
import { CardDeck } from "reactstrap";

function Productlist() {
  const [product, setProduct] = useState([]);

  const getData = () => {
    let token = localStorage.getItem("token");
    let config = {
      headers: {
        Authorization: token,
      },
    };

    axios
      .get(`https://test-binar.herokuapp.com/v1/products`, config)
      .then((json) => {
        setProduct(json.data.result);
        console.log("json", json.data.result);
      });
  };

  return (
    <div>
      <Navbar2 />
      <Button onClick={() => getData()}>Show data</Button>
      <div
        className="cardcontainer"
        style={{ marginTop: "5px", display: "flex", overflow: "hidden" }}
      >
        <CardDeck>
          {product.map((item, index) => {
            return (
              <Card
                image={item.imageurl}
                title={item.name}
                price={item.price}
                id={item.id}
              />
            );
          })}
        </CardDeck>
      </div>
    </div>
  );
}

export default Productlist;
