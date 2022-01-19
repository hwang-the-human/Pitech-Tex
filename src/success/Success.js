import React from "react";
import Info from "../payment/Info";
import successImage from "../images/success.png";
import "./Success.css";

export default function Success() {
  return (
    <div className="success">
      <Info title={"Your order"} />
      <div className="success__container">
        <img src={successImage} className="success__image" alt="shoes" />
        <p className="success__title">Thank you!</p>
        <p className="success__subTitle">Your order has been placed</p>
      </div>
    </div>
  );
}
