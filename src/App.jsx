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
import { AuthProvider } from "./context/AuthContext";
import AdminPage from "./pages/admin/AdminPage";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  return (
    <DropDownProvider>
      <AuthProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/productos" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route element={<ProtectedRoute/>}>
              <Route path="/admin" element={<AdminPage />} />
            </Route>
            <Route path="*" element={<Error />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </AuthProvider>
    </DropDownProvider>
  );
}

export default App;
