import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Basket from "../Pages/Basket/Basket";
import Wishlist from "../Pages/Wishlist/Wishlist";
import AdminPanel from "../Pages/AdminPanel/AdminPanel";

const Router = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/wishlist" element={<Wishlist />} />
          <Route path="/admin" element={<AdminPanel />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default Router;
