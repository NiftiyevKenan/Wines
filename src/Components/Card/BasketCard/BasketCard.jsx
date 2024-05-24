import React from "react";
import style from "./BasketCard.module.scss";
import Button from "../../Buttons/Button";

const BasketCard = ({ item, Delete }) => {
  return (
    <div className={style.card}>
      <img src={item.thumbnail} alt={item.title} />
      <p>{item.title}</p>
      <p>{item.description}</p>
      <p>{item.price} Qepik</p>
      <p>{item.count}</p>
      <Button onclick={Delete} text="Delete" />
    </div>
  );
};

export default BasketCard;
