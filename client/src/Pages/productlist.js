import React from "react";
import Card from "../components/card";
import Navbar2 from "../components/Navbar2";
import "../styles/Card.css";
import { Products } from "../components/Products";

function productlist() {
  return (
    <div>
      <Navbar2 />
      <div
        className="cardcontainer"
        style={{ marginTop: "5px", flexDirection: "column" }}
      >
        {Products.map((item, index) => {
          return (
            <Card image={item.image} title={item.title} price={item.price} />
          );
        })}
      </div>
    </div>
  );
}

export default productlist;
