import React, { useEffect, useState } from "react";
import style from "./Basket.module.scss";
import axios from "axios";
import BasketCard from '../../Components/Card/BasketCard/BasketCard'
import Header from "../../Components/Header/Header";

const Basket = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios.get("https://664b3125a300e8795d448fab.mockapi.io/basket").then((res) => {
      setProduct(res.data);
    });
  };

  useEffect(() => {
    getData();
  }, []);

const deleteBasket = (id) => {
  axios.delete(`https://664b3125a300e8795d448fab.mockapi.io/basket/${id}`)
  setTimeout(() => {
    getData()
  }, 600);
}

  return (
    <div className={style.page}>
      <Header/>
      <div className={style.cards}>
        <div className={style.container}>
          {product && product.map((item) => <BasketCard item={item} Delete={() => deleteBasket(item.id)}/>)}
        </div>
      </div>
    </div>
  );
};

export default Basket;
