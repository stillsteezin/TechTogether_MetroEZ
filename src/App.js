import React from "react";
import "./App.css";
import Home from "./containers/Home";
import Trains from "./containers/Trains";
import GoogleApiWrapper from "./containers/Location";
import Form from "./containers/Form";
import Thanks from "./containers/Thanks";
import { Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Home} />
      <Route exact path="/trains" component={Trains} />
      <Route exact path="/location" component={GoogleApiWrapper} />
      <Route exact path="/form" component={Form} />
      <Route exact path="/thanks" component={Thanks} />
    </div>
  );
}

export default App;
