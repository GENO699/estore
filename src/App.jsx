/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-unused-vars */
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { useState, createContext, useContext, useEffect } from "react";

import Card from "./components/Card";
import Header from "./components/Header";
import SecondCards from "./components/SecondCards";
import styled from "styled-components";
import ThreeCards from "./components/ThreeCards";
import ScrollCards from "./components/ScrollCards";
import LoadingCircle from "./components/Circlewaiting";

import HomePage from "./pages/Home";
import ProductsPage from "./pages/Products";
import ProductDetail from "./pages/CardPageDeatil";
import CategoriesFilter from "./components/Categories";
import Shopping from "./pages/Shopping";
import RegistrationForm from "./pages/RegistrationForm";
import Login from "./pages/Login";
import Footer from "./pages/Footer";

export const ProductsContext = createContext(null);

function App() {
  // const [count, setCount] = useState(0)
  const [products, setProducts] = useState([]);
  useEffect(() => {
    try {
      const cart = JSON.parse(localStorage.getItem("cart")) || [];
      setProducts(cart);
    } catch (error) {
      console.error("Error parsing local storage data:", error);
      setProducts([]);
    }
  }, []);

  // const [cartVisible, setCartVisible] = useState(false);

  // const [selectedCategory, setSelectedCategory] = useState("");

  const Container = styled.div`
    width: 100%;
    max-width: 1280px;
    height: auto;
    margin: 0 auto;
    display: flex;
  `;

  const DivInner = styled.div`
    width: 100%;
    height: auto;
  `;

  function HomePage() {
    return (
      <div>
        <SecondCards />
        <ThreeCards />
        <ScrollCards />

        <Footer />
      </div>
    );
  }

  return (
    <>
      <ProductsContext.Provider value={{ products, setProducts }}>
        <Router>
          <Container>
            <DivInner>
              <Header />
              <Link
                style={{
                  textDecoration: "none",
                }}
                to={`/loading /products/:category`}
              >
                {/* <CategoriesFilter /> */}
              </Link>

              <Link to="/products" style={{ textDecoration: "none" }}>
                <Card />
              </Link>

              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/products" element={<ProductsPage />} />
                <Route path={`/products/:id`} element={<ProductDetail />} />
                <Route
                  path={`/categories/:category`}
                  element={<CategoriesFilter />}
                />
                <Route path="/shopping" element={<Shopping />} />
                <Route path="/registration" element={<RegistrationForm />} />
                <Route path="/login" element={<Login />} />
                <Route path="/loading" element={<LoadingCircle />} />
              </Routes>
            </DivInner>
          </Container>
        </Router>
      </ProductsContext.Provider>
    </>
  );
}

export default App;
