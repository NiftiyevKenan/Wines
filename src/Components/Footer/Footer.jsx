import React from "react";
import style from "./Footer.module.scss";
import { FaHeart } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { TfiYoutube } from "react-icons/tfi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <div className={style.footer}>
      <div className={style.container}>
        <div className={style.top}>
          <div className={style.icon}>
            <FaFacebookF />
          </div>
          <div className={style.icon}>
            <FaTwitter />
          </div>
          <div className={style.icon}>
            <TfiYoutube />
          </div>
          <div className={style.icon}>
            <FaInstagram />
          </div>
        </div>
        <div className={style.bottom}>
          <p>
            Copyright ©2024 All rights reserved | This template is made with{" "}
            <span>
              <FaHeart />
            </span>{" "}
            by <a href="#">Colorlib</a>{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
