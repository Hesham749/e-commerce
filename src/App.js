import "./App.css";
import { Routes, Route } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./rtk/slices/ProductsSlice";
import ProductDetails from "./components/product details/ProductDetails";
import AllProducts from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import Nav2 from "./components/navbar/Nav2";

function App() {
  const Products = useSelector((state) => state.products);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Nav />
      {/* <Nav /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/products" element={<AllProducts />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
