import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Pricing />
    </div>
  );
}

export default App;
