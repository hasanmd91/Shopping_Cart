import { Routes, Route } from "react-router-dom";
import Home from "./components/Pages/Home";
import Store from "./components/Pages/Store";
import About from "./components/Pages/About";
import Navbar from "./components/Pages/Navbar";
import { Container } from "react-bootstrap";

const App = () => {
  return (
    <>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </>
  );
};

export default App;
