import { BrowserRouter, Route, Routes } from "react-router";
import Home from "../pages/Home";
import Contact from "../pages/Contact";
import Products from "../pages/Products";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
