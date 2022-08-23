import React from "react";
import {useNavigate} from "react-router-dom";
import Card from "../card/card";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";
import MyListCatalog from "./mylist-catalog";

const MyList = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Избранное</h1>

        <div className="user-block">
          <div className="user-block__avatar">
            <img
              src="img/avatar.jpg"
              alt="User avatar"
              width="63"
              height="63"
            />
          </div>
        </div>
      </header>

      <section className="catalog">
        <h2 className="catalog__title visually-hidden">Каталог</h2>
        <MyListCatalog />
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
