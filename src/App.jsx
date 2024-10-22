import React, { Suspense, lazy } from "react";
import { DropDownProvider } from "./components/Navbar/DropDownContext";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./ProtectedRoute";

// Lazy load components
const Home = lazy(() => import("./pages/home/Home"));
const Product = lazy(() => import("./pages/products/Products"));
const Error = lazy(() => import("./pages/error/Error"));
const About = lazy(() => import("./pages/about/About"));
const Contact = lazy(() => import("./pages/contact/Contact"));
const Register = lazy(() => import("./pages/user/Register"));
const Login = lazy(() => import("./pages/user/Login"));
const AdminPage = lazy(() => import("./pages/admin/AdminPage"));

function App() {
  return (
    <AuthProvider>
      <DropDownProvider>
        <BrowserRouter>
          <Navbar />
          <Suspense fallback={<div>Loading...</div>}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/productos" element={<Product />} />
              <Route path="/about" element={<About />} />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/admin" element={<AdminPage />} />
              </Route>
              <Route path="*" element={<Error />} />
            </Routes>
          </Suspense>
          <Footer />
        </BrowserRouter>
      </DropDownProvider>
    </AuthProvider>
  );
}

export default App;