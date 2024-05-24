import React from "react";
import style from "./ListFive.module.scss";

const ListFive = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.top}>
          <h1>Wine's Blog</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Commodi,
            perspiciatis!
          </p>
          <a href="#">View All Products --</a>
        </div>
        <div className={style.bottom}>
          <div className={style.card}>
            <img
              src="https://preview.colorlib.com/theme/wines/images/img_1.jpg"
              alt="Wines"
            />
            <h1>What You Need To Know About Premium Rosecco</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              temporibus praesentium neque, voluptatum quam quibusdam.
            </p>
            <a href="#">Dave Rogers in News</a>
          </div>
          <div className={style.card}>
            <img
              src="https://preview.colorlib.com/theme/wines/images/img_1.jpg"
              alt="Wines"
            />
            <h1>What You Need To Know About Premium Rosecco</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              temporibus praesentium neque, voluptatum quam quibusdam.
            </p>
            <a href="#">Dave Rogers in News</a>
          </div>
          <div className={style.card}>
            <img
              src="https://preview.colorlib.com/theme/wines/images/img_1.jpg"
              alt="Wines"
            />
            <h1>What You Need To Know About Premium Rosecco</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi
              temporibus praesentium neque, voluptatum quam quibusdam.
            </p>
            <a href="#">Dave Rogers in News</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListFive;
