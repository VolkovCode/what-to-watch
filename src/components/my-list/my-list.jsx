import React from "react";
// import {useNavigate} from "react-router-dom";
// import Card from "../card/card";
import Footer from "../footer/footer";
import Header from "../header/header";
import { AvatarBlock } from "../header/user-block/avater-block";
import Logo from "../logo/logo";
// import Logo from "../logo/Logo";
import MyListCatalog from "./mylist-catalog";

const MyList = () => {
  return (
    <div className="user-page">
      <header className="page-header user-page__head"><Logo />
        <h1 className="page-title user-page__title">My list</h1>
        <AvatarBlock />
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
