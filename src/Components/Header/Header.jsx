import React from "react";
import style from "./Header.module.scss";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigation = useNavigate();

  const GoHome = () => {
    navigation("/");
  };

  const GoBasket = () => {
    navigation("/basket");
  };

  const GoWishlist = () => {
    navigation("/wishlist");
  };

  const GoAdmin = () => {
    navigation("/admin");
  };

  return (
    <div className={style.header}>
      <div className={style.container}>
        <div className={style.Logo}>
          <img
            src="https://preview.colorlib.com/theme/wines/images/logo.png"
            alt="Vine"
          />
        </div>
        <div className={style.navbar}>
          <ul>
            <li>
              <a href="#" onClick={GoHome}>
                Home
              </a>
            </li>
            <li>
              <a href="#" onClick={GoBasket}>
                Cart
              </a>
            </li>
            <li>
              <a href="#" onClick={GoWishlist}>
                Wishlist
              </a>
            </li>
            <li>
              <a href="#" onClick={GoAdmin}>
                AdminPanel
              </a>
            </li>
            <li>
              <a href="#">Pages</a>
            </li>
          </ul>
          <div className={style.bars}>
            <FaBars />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
