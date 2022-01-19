import React, { useState } from "react";
import { MutatingDots } from "react-loader-spinner";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading">
      <MutatingDots
        heigth="100"
        width="100"
        color="#e31b23"
        arialLabel="loading"
      />
    </div>
  );
}

export default Loading;
