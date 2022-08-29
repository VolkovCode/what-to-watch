import React from "react";
// import {useNavigate} from "react-router-dom";
// import Card from "../card/card";
import Footer from "../footer/Footer";
import Header from "../header/header";
// import Logo from "../logo/Logo";
import MyListCatalog from "./mylist-catalog";

const MyList = () => {
  return (
    <div className="user-page">
      <Header />

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Каталог</h2>
        <MyListCatalog />
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
