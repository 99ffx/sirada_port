import "./App.css";
import React from "react";
import Navbar from "./components/navbar/navbar";
import Home from "./screen/home";
import Footer from "./components/footer/footer";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <Footer />
    </>
  );
}

export default App;
