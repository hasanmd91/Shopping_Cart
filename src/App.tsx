import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import Singleproduct from "./Pages/Singleproduct";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from "./Pages/Footer";

const App = () => {
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/store/:singleproduct" element={<Singleproduct />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
};

export default App;
