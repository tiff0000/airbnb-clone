import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />

        {/* Home */}

        {/* Header */}
        {/* Banner */}
        {/* Search */}
        {/* Cards */}
      </Router>
    </div>
  );
}

export default App;
