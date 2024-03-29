import React from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import OurStore from "./pages/OurStore";
import Blogs from "./pages/Blogs";
import CompareProduct from "./pages/CompareProduct";
import Wishlist from "./pages/Wishlist";
import Login from "./pages/Login";
import Cart from "./pages/Cart";
import ProductDetails from "./components/ProductDetails";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase";

function App() {
  const [user] = useAuthState(auth);

  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="ourstore" element={<OurStore />} />
            <Route path="blogs" element={<Blogs />} />
            <Route path="compare-products" element={<CompareProduct />} />
            <Route path="wishlist" element={<Wishlist />} />
            <Route path="login" element={<Login />} />
            <Route path="cart" element={user ? <Cart /> : <Login />} />
            <Route path="ourstore/cart" element={user ? <Cart /> : <Login />} />
            <Route exact path="/ourstore/:id" element={<ProductDetails />} />
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default App;
