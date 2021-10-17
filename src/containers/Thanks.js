import React from "react";
import { Link } from "react-router-dom";
import Check from "../images/check.png";

function Thanks() {
  return (
    <main className="page-bg thankspage">
      <h1 className="ty-message">Thank you, your form has been submitted.</h1>
      <img className="check" src={Check} alt="Check mark icon" />
      <button className="homebtn">
        <Link to="/">Home</Link>
      </button>
    </main>
  );
}

export default Thanks;
