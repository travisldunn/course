import React, { useState, useMemo } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import TicTacToe from "./components/TicTacToe";
import Debounce from "./components/Debounce";
import RefPopUp from "./components/RefPopUp";
import Nav from "./components/Nav";
import { UserContext } from "./context/UserContext";
import UseState from "./components/useState";

function App() {
  const [user, setUser] = useState(null);
  const value = useMemo(() => ({ user, setUser }), [user, setUser]);

  return (
    <div className="App">
      <Router>
        <UserContext.Provider value={value}>
          <Nav />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/tic-tac-toe" component={TicTacToe} />
            <Route path="/debounce" component={Debounce} />
            <Route path="/refpopup" component={RefPopUp} />
            <Route path="/usestate" component={UseState} />
          </Switch>
        </UserContext.Provider>
      </Router>
    </div>
  );
}

export default App;
