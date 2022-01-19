import React from "react";
import "./Error.css";

export default function Error({ errors }) {
  return (
    <div className="error">
      {errors.map((text, i) => (
        <p className="error__text" key={i}>
          {text}
        </p>
      ))}
    </div>
  );
}
