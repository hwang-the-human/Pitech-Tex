import "./Payment.css";
import React, { useState } from "react";
import Error from "./Error";
import Info from "./Info";
import { connect } from "react-redux";
import { setLoading } from "../redux/Reducers";
import { useNavigate } from "react-router-dom";

function mapDispatchToProps(dispatch) {
  return {
    setLoading: (opened) => dispatch(setLoading(opened)),
  };
}

function App({ setLoading }) {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [number, setNumber] = useState("");
  const [date, setDate] = useState("");
  const [cvv, setCvv] = useState("");
  const [errors, setErrors] = useState([]);

  function handleCheckOut() {
    var subErrors = [];
    // Validation
    if (name.length < 3) {
      subErrors.push("The minimum length of name must be 3.");
    }

    if (
      name.charAt(0) === " " ||
      name.split(" ").length - 1 > 1 ||
      name.charAt(name.length - 1) === " "
    ) {
      subErrors.push("Incorrect format of card name.");
    }

    if (number.length < 19) {
      subErrors.push("Incorrect format of card number.");
    }

    if (date.length < 5) {
      subErrors.push("Incorrect format of date.");
    }

    if (cvv.length < 3) {
      subErrors.push("Incorrect format of CVV.");
    }

    setErrors(subErrors);

    // If there is not any errors
    if (subErrors.length === 0) {
      setLoading(true);

      // Loading imitation
      setTimeout(() => {
        setLoading(false);
        navigate("/success");
      }, 3000);
    }
  }

  return (
    <div className="payment">
      <Info title={"Shopping cart"} />

      <div className="payment__paymentBox">
        <p className="payment__title">Card information</p>

        <input
          className="payment__textInput"
          type="text"
          placeholder="Card's holder name"
          maxLength={30}
          value={name}
          onChange={(e) =>
            setName(e.target.value.replace(/[^a-zA-Z ]/g, "").toUpperCase())
          }
        />
        <input
          className="payment__textInput"
          type="text"
          placeholder="Number of card"
          maxLength={19}
          value={number}
          onChange={(e) => {
            setNumber(
              e.target.value
                .replace(/[^\dA-Z]/g, "")
                .replace(/(.{4})/g, "$1 ")
                .trim()
            );
          }}
        />

        <div className="payment__textInputBox">
          <input
            className="payment__textInput payment__textInput--small"
            type="text"
            placeholder="Date"
            maxLength={5}
            value={date}
            onChange={(e) => {
              let text = e.target.value;
              if (text.length === 3) {
                if (!text.includes("/")) {
                  text =
                    text.substring(0, 2) + "/" + text.substring(2, text.length);
                } else {
                  text = text.slice(0, -1);
                }
              }
              setDate(text.replace(/[^\dA-Z/]/g, "").trim());
            }}
          />

          <input
            className="payment__textInput payment__textInput--small"
            type="text"
            placeholder="CVV"
            maxLength={3}
            value={cvv}
            onChange={(e) =>
              setCvv(e.target.value.replace(/[^\dA-Z]/g, "").trim())
            }
          />
        </div>

        <Error errors={errors} />

        <div className="payment__button" onClick={handleCheckOut}>
          CHECK OUT
        </div>
      </div>
    </div>
  );
}

export default connect(null, mapDispatchToProps)(App);
