import React from "react";
import ReactDOM from "react-dom/client";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import "./index.css";
import HomePage from "./landing/home/HomePage";
import Signup from "./landing/Signup/signup";
import About from "./landing/about/AboutPage";
import Products from "./landing/product/productsPage";
import Pricing from "./landing/pricing/PricingPage";
import Support from "./landing/support/SupportPage";
import NotFound from "./landing/NotFound";
import Navbar from "./landing/Navbar";
import Footer from "./landing/Footer";


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
<BrowserRouter>
<Navbar />
<Routes>
  <Route path="/" element={<HomePage/>} />
  <Route path="Signup" element={<Signup/>} />
  <Route path="About" element={<About/>} />
  <Route path="Products" element={<Products/>} />
  <Route path="Pricing" element={<Pricing />} />
  <Route path="Support" element={<Support/>} />
  <Route path="*" element={<NotFound/>} />
</Routes>
<Footer />
</BrowserRouter>
);
