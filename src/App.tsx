import React from "react";
import { HomePage } from "./screens";
import { Header, Footer } from "./components";
import "./App.scss";

function App() {
  return (
    <div className="app">
      <Header />
      <HomePage />
      <Footer />
    </div>
  );
}

export default App;
