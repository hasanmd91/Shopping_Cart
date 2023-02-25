import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";

const App = () => {
  return (
    <ShoppingCartProvider>
      <Navbar />
      <Container className="mb-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<Store />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Container>
    </ShoppingCartProvider>
  );
};

export default App;
