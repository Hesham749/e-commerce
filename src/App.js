import './App.css';
import { Routes, Route } from 'react-router-dom'
import Nav from './components/navbar/Nav';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchProducts } from './rtk/slices/ProductsSlice';

function App() {
  const Products = useSelector(state=>state.products)
  console.log(Products)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchProducts())
  }, []);
  return (
    <>
    <Nav />
    <Routes>
      <Route path="/" element={<Home />} />

    </Routes>


    <Footer />
    </>
  );
}

export default App;
