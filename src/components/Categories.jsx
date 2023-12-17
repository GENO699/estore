import { useState, useEffect } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import styled from "styled-components";
// import Footer from "../pages/Footer";

function CategoriesFilter() {
  const MainDiv = styled.div`
    width: 100%;
    height: auto;
    flex-direction: column;
    display: flex;
    justify-content: center;
    align-items: center;

    @media (max-width: 1000px) {
      width: 100%;
      height: auto;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    
  `;

  const ProductsDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    /* flex-direction: row; */
    align-items: center;

    @media (max-width: 768px) {
      width: 100%;
      height: auto;
      display: flex;
      
      
    }

    @media (max-width: 1280px) {
      width: 100%;
      height: auto;
      display: flex;
      flex-wrap: wrap;
    }
    

    @media (max-width: 1024px) {
      display: flex;
      width: 100%;
      justify-content: center;
      flex-direction: row;
      flex-wrap: wrap;
    }
  `;

  const Ul = styled.ul`
    width: 80%;
    height: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;


    @media (max-width: 1000px) {
      display: flex;
      width: 100%;
      flex-direction: column;
      text-align: center;
      justify-content: center;
      align-items: center;
      margin: 0;
      padding: 0;
      
    }

    li {
      list-style: none;
      font-size: 17px;
      text-decoration: none;
      color: black;

      @media (max-width: 1000px) {
        margin-top: 10px
      }
    }

    a {
      text-decoration: none;
      color: black;
      font-size: 17px;
    }
  `;

  const CardLink = styled(Link)`
    width: 30%;
    height: auto;
    margin: 10px;
    border-radius: 14px;
    background-color: #fff;
    text-decoration: none;
    color: #ff1b1b;
    display: flex;
    justify-content: center;
    align-items: center;
    background: none;
    margin: 0;
    padding: 0;
    text-decoration: none;
    @media (max-width: 768px) {
      width: 40%;
      
    }

    @media (max-width: 1024px) {
      width: 70%;
      height: auto;
      display: flex;
    }
  `;

  const ProductCard = styled.div`
    width: 100%;
    height: 42vh;
    display: flex;
    flex-direction: column;
    padding: 12px;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    
    border-radius: 14px;
    background-color: #fff;
    color: black;
    margin: 10px;
    align-items: center;
    cursor: pointer;

    @media (max-width: 1024px) {
      width: 80%;
      height: auto;
      display: flex;
    }

    img {
      width: 180px;
      height: 150px;
     
    }
  `;

  const TextDiv = styled.div`
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    font-size: 17px;

    .GreenPrice {
      color: #1acd1a;
      font-size: 17px;
    }
  `;

  const ButtonDiv = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: flex-end;
  `;

  const Button = styled.button`
    width: 100%;
    height: 35px;
    background-color: #0c700c;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 20px;
    color: white;
    transition: 0.1s;
    &:hover {
      background-color: red;
    }
  `;

  const [categories, setCategories] = useState([]);
  const [categoryProducts, setCategoryProducts] = useState([]);
  const { category } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products/categories"
        );
        setCategories(response.data);
      } catch (error) {
        console.error("Error Get Data", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchProducts = async () => {
      if (category) {
        try {
          const response = await axios.get(
            `https://fakestoreapi.com/products/category/${category}`
          );
          setCategoryProducts(response.data);
        } catch (error) {
          console.error("Error Get Category Products", error);
        }
      }
    };
    fetchProducts();
  }, [category]);

  return (
    <>
      <MainDiv>
        <Ul>
          {categories.map((category) => (
            <li key={category}>
              <Link to={`/categories/${encodeURIComponent(category)}`}>
                {category}
              </Link>
            </li>
          ))}
        </Ul>

        <ProductsDiv>
          {categoryProducts.map((product) => (
            <CardLink key={product.id} to={`/products/${product.id}`}>
              <ProductCard>
                <img src={product.image} alt={product.title} />
                <TextDiv>
                  <p>{product.title}</p>
                  <p className="GreenPrice">Price: ${product.price}</p>
                </TextDiv>
                <ButtonDiv>
                  <Button>Purchase</Button>
                </ButtonDiv>
              </ProductCard>
            </CardLink>
          ))}
        </ProductsDiv>
      </MainDiv>
        {/* <Footer/> */}
    </>
  );
}

export default CategoriesFilter;
