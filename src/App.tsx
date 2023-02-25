import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Store from "./components/Pages/Store";
import About from "./components/Pages/About";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Container>
  );
};

export default App;
