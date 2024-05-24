import React from "react";
import style from "./ListThree.module.scss";

const ListThee = () => {
  return (
    <div className={style.page}>
      <div className={style.container}>
        <div className={style.card}>
          <img
            src="https://preview.colorlib.com/theme/wines/images/person_1.jpg"
            alt="Woman"
          />
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            sapiente voluptatem excepturi fugit, dignissimos impedit vel nobis!
            Dolor pariatur possimus culpa necessitatibus asperiores molestiae
            optio, corporis tempora modi reiciendis sapiente!"
          </p>
          <a href="#">- Levvi Mori</a>
        </div>
        <div className={style.card}>
          <img
            src="https://preview.colorlib.com/theme/wines/images/person_1.jpg"
            alt="Woman"
          />
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            sapiente voluptatem excepturi fugit, dignissimos impedit vel nobis!
            Dolor pariatur possimus culpa necessitatibus asperiores molestiae
            optio, corporis tempora modi reiciendis sapiente!"
          </p>
          <a href="#">- Levvi Mori</a>
        </div>
        <div className={style.card}>
          <img
            src="https://preview.colorlib.com/theme/wines/images/person_1.jpg"
            alt="Woman"
          />
          <p>
            "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            sapiente voluptatem excepturi fugit, dignissimos impedit vel nobis!
            Dolor pariatur possimus culpa necessitatibus asperiores molestiae
            optio, corporis tempora modi reiciendis sapiente!"
          </p>
          <a href="#">- Levvi Mori</a>
        </div>
      </div>
    </div>
  );
};

export default ListThee;
