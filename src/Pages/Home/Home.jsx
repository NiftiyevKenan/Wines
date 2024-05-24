import React, { useEffect, useState } from "react";
import Header from "../../Components/Header/Header";
import ListOne from "../../Components/ListOne/ListOne";
import ProductCard from "../../Components/Card/ProductCard/ProductCard";
import style from "./Home.module.scss";
import axios from "axios";
import ListTwo from "../../Components/ListTwo/ListTwo";
import ListThee from "../../Components/ListThree/ListThee";
import ListFive from "../../Components/ListFive/ListFive";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios.get("https://dummyjson.com/products?limit=8").then((res) => {
      setProduct(res.data.products);
    });
  };

  useEffect(() => {
    getData();
  }, []);

  const addToCart = (product) => {
    axios
      .get("https://664b3125a300e8795d448fab.mockapi.io/basket")
      .then((res) => {
        const db = res.data;
        const existingData = db.find((item) => item.id == product.id);
        if (existingData) {
          axios.put(
            `https://664b3125a300e8795d448fab.mockapi.io/basket/${existingData.id}`,
            {
              ...existingData,
              count: existingData.count + 1,
            }
          );
        } else {
          axios.post(`https://664b3125a300e8795d448fab.mockapi.io/basket`, {
            ...product,
            count: 1,
          });
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const addToWishlist = (product) => {
    axios
      .get("https://664b3125a300e8795d448fab.mockapi.io/wishlist")
      .then((res) => {
        const db = res.data;
        const existingProduct = db.find((item) => item.id == product.id);
        if (existingProduct) {
          alert("Mehsul artiq wishlistde movcuddur");
        } else {
          axios.post(
            "https://664b3125a300e8795d448fab.mockapi.io/wishlist",
            product
          );
        }
      });
  };

  return (
    <div className={style.page}>
      <Header />
      <ListOne />
      <div className={style.cards}>
        <div className={style.container}>
          {product &&
            product.map((item) => (
              <ProductCard
                item={item}
                addToCart={() => addToCart(item)}
                addToWishlist={() => addToWishlist(item)}
              />
            ))}
        </div>
      </div>
      <ListTwo />
      <ListThee />
      <ListFive/>
      <Footer/>
    </div>
  );
};

export default Home;
