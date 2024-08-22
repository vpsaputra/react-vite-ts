import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
    </div>
  );
}

export default App;
