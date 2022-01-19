import React from "react";
import "./Info.css";
import Item from "./Item";
import shoes1 from "../images/shoes1.jpeg";
import shoes2 from "../images/shoes2.jpeg";

export default function Info({ title }) {
  const data = [
    {
      title: "Nike Blazer Low '77 Vintage Men's Shoes",
      style: "DA6364-400",
      size: "M 6 / W 7.5",
      color: "Midnight Navy/Sail/White",
      qty: "1",
      price: "$85.00",
      image: shoes1,
    },

    {
      title: "Nike Pegasus Trail 3 GORE-TEX Men's Trail Running Shoes",
      style: "DO6728-300",
      size: "6.5",
      color: "Oil Green/Total Orange/Iron Grey",
      qty: "1",
      price: "$160.00",
      image: shoes2,
    },
  ];

  return (
    <div className="info">
      <div className="info__titleBox">
        <p className="info__title">{title}</p>
        {title !== "Your order" && <p className="info__subTitle">Edit</p>}
      </div>
      <div className="info__summaryBox">
        <div className="info__textBox">
          <p>Subtotal</p>
          <p>$245</p>
        </div>

        <div className="info__textBox">
          <p>Estimated Shipping</p>
          <p>$8</p>
        </div>

        <div className="info__textBox">
          <p>Estimated Tax</p>
          <p>$0</p>
        </div>

        <div className="info__textBox info__textBox--margin">
          <p className="info__totalText">TOTAL</p>
          <p className="info__totalText info__totalText-red">$253.00</p>
        </div>
      </div>

      <div className="info__summaryBox info__summaryBox--border">
        <p className="info__totalText">ARRIVES BY THU, JAN 27</p>

        {data.map((data, i) => (
          <Item data={data} key={i} />
        ))}
      </div>
    </div>
  );
}
