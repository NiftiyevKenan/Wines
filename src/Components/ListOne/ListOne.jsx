import React from "react";
import style from "./ListOne.module.scss";

const ListOne = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <img
          src="https://preview.colorlib.com/theme/wines/images/hero_1.jpg"
          alt="Vine"
        />
      </div>
    </div>
  );
};

export default ListOne;
