import React, { useEffect, useState } from "react";
import style from "./AdminPanel.module.scss";
import ConsolCard from "../../Components/Card/ConsolCard/ConsolCard";
import Header from "../../Components/Header/Header";
import axios from "axios";
import { useFormik } from "formik";

const AdminPanel = () => {
  const [product, setProduct] = useState([]);

  const getData = () => {
    axios
      .get("https://664b3125a300e8795d448fab.mockapi.io/basket")
      .then((res) => {
        setProduct(res.data);
      });
  };

  useEffect(() => {
    getData();
  }, []);

  const cosolDelete = (id) => {
    axios.delete(`https://664b3125a300e8795d448fab.mockapi.io/basket/${id}`);
    setTimeout(() => {
      getData();
    }, 600);
  };

  const [search, setSearch] = useState("");

  const handlSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredData = product.filter((item) =>
    item.title.toLowerCase().includes(search.toLowerCase())
  );

  const [sort, setSort] = useState(null);

  const handleSort = (type) => {
    setSort(type);
  };

  useEffect(() => {
    if (sort) {
      setProduct((prevData) =>
        [...prevData].sort((a, b) => {
          if (sort === "asc") {
            return a.title.localeCompare(b.title);
          } else {
            return b.title.localeCompare(a.title);
          }
        })
      );
    }
  }, [sort]);

  const formik = useFormik({
    initialValues: {
      thumbnail: "",
      title: "",
      price: "",
    },
    onSubmit: (values,  {resetForm} ) => {
      axios.post(`https://664b3125a300e8795d448fab.mockapi.io/basket`, values);
      setTimeout(() => {
        getData();
      }, 1000);
      resetForm({
        thumbnail: "",
        title: "",
        price: "",
      });
    },
  });

  return (
    <div className={style.page}>
      <Header />
      <div className={style.search}>
        <div className={style.container}>
          <button onClick={() => handleSort("asc")}>A-Z</button>
          <button onClick={() => handleSort("desc")}>Z-A</button>
          <input
            type="text"
            placeholder="Search..."
            onChange={handlSearch}
            value={search}
          />
        </div>
      </div>
      <div className={style.cards}>
        <div className={style.container}>
          {filteredData &&
            filteredData.map((item) => (
              <ConsolCard item={item} Delete={() => cosolDelete(item.id)} />
            ))}
        </div>
      </div>
      <div className={style.crud}>
        <div className={style.container}>
          <form onSubmit={formik.handleSubmit}>
            <input
              id="thumbnail"
              name="thumbnail"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.thumbnail}
            />
            <input
              id="title"
              name="title"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <input
              id="price"
              name="price"
              type="text"
              onChange={formik.handleChange}
              value={formik.values.price}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
