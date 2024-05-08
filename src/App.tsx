import React from "react";
import Header from "./components/Header";
import HomePage from "./components/Homepage/HomePage";
import "./styles.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HomePage />
      </header>
    </div>
  );
}

export default App;
