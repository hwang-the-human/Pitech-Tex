import React from "react";
import "./Item.css";

export default function Item({ data }) {
  return (
    <div className="item">
      <img src={data.image} className="item__image" alt="shoes" />

      <div className="item__infoBox">
        <p className="item__title">{data.title}</p>

        <p className="item__text">Style #: {data.style}</p>
        <p className="item__text">Size: {data.size}</p>
        <p className="item__text">Color: {data.color}</p>
        <p className="item__text">Qty: {data.qty}</p>
        <p className="item__text">{data.price}</p>
      </div>
    </div>
  );
}
