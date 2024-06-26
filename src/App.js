
import { Routes, Route, Outlet } from "react-router-dom";
import Nav from "./components/navbar/Nav";
import Footer from "./components/footer/Footer";
import Home from "./pages/home/Home";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchProducts } from "./rtk/slices/ProductsSlice";
import ProductDetails from "./components/product details/ProductDetails";
import AllProducts from "./pages/products/Products";
import Contact from "./pages/contact/Contact";
import Cart from "./pages/cart/Cart";
import NotFound from "./pages/not found/NotFound";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchProducts());
  }, []);
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" exact element={<ProductDetails />} />
        <Route path="/products" element={<Outlet />}>
          <Route path="" element={<AllProducts />} />
          <Route path=":cat" element={<AllProducts />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
