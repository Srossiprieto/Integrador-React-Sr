import { DropDownProvider } from "./components/Navbar/DropDownContext";

import Navbar from "./components/Navbar/Navbar";

import Home from "./pages/home/Home";
import Product from "./pages/products/Products";
import Error from "./pages/error/Error";
import About from "./pages/about/About";
import Footer from "./components/Footer/Footer";
import Contact from "./pages/contact/Contact";
import Register from "./pages/user/Register";
import Login from "./pages/user/Login";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <DropDownProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/productos" element={<Product />} />
          <Route path="/nosotros" element={<About />} />
          <Route path="/contacto" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/add-product" element={<h1>add product page</h1>} />
          <Route
            path="/delete-product"
            element={<h1>delete product page</h1>}
          />
          <Route
            path="/update-product"
            element={<h1>update product page</h1>}
          />
          <Route
            path="/update-category"
            element={<h1>update category page</h1>}
          />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </DropDownProvider>
  );
}

export default App;
