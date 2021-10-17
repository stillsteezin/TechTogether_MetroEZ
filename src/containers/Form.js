import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import Warning from "../images/warning.png";

class Form extends Component {
  submitForm(e) {
    e.preventDefault();
    this.props.history.push("/thanks");
  }

  render() {
    return (
      <div>
        <main className="page-bg report">
          <img className="warning" src={Warning} alt="Warning sign" />
          <h1 className="issue-text">Issue Form</h1>
          <form onSubmit={this.submitForm.bind(this)}>
            <label> Location : </label>
            <textarea name="location" rows="1"></textarea>
            <label> Description : </label>
            <textarea name="description" rows="1"></textarea>
            <button className="submit" type="submit">
              Submit
            </button>
          </form>
        </main>
      </div>
    );
  }
}

export default withRouter(Form);
