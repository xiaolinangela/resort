import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/home";
import Rooms from "./pages/rooms";
import Error from "./pages/error";
import SingleRoom from "./pages/singleRoom";
import { Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";

function App() {
  return (
    <React.Fragment>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
      </Switch>
    </React.Fragment>
  );
}

export default App;
