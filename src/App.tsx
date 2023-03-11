import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import Home from "./Pages/Home";
import Store from "./Pages/Store";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Footer } from "./Pages/Footer";

const App = () => {
  return (
    <>
      {" "}
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4" style={{ minHeight: "100vh" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/store" element={<Store />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </Container>
        <Footer />
      </ShoppingCartProvider>
    </>
  );
};

export default App;
