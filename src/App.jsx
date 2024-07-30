import { useState } from "react";
import "./App.scss";
import Contact from "./pages/Contact/Contact";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Work from "./pages/Work/Work";
import ParticlesComponent from "./assets/helpers/particles";

function App() {
  return (
    <BrowserRouter>
      <div className="container">
        <ParticlesComponent id="particles" />
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/work" element={<Work />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
