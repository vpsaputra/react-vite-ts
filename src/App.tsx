import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Features from "./components/Features/Features";
import Pricing from "./components/Pricing/Pricing";
import Footer from "./components/Footer";
import Faqs from "./components/Faqs";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Header />
      <Features />
      <Pricing />
      <Faqs></Faqs>
      <Footer></Footer>
    </div>
  );
}

export default App;
