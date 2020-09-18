import React from "react";
import "./App.css";
import Home from "./Home";
import Header from "./Header";
import Footer from "./Footer";
import { BrowserRouter as Router } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Home />
        <Footer />

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
