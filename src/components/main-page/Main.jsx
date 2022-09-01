import React from "react";
import Card from "../card/card";
import Footer from "../footer/Footer";
import GenresList from "../genre/GenresList";
import Header from "../header/header";
import PromoCard from "../promo-card/promo-card";
import ShowMore from "./show-more";

const Main = () => {
  return (
    <div>
      <PromoCard />
      <div className="page-content">
        <section className="catalog">
          <h2 className="catalog__title visually-hidden">Catalog</h2>
          <GenresList />
          <Card/>
          <ShowMore />
        </section>

        <Footer />
      </div>
    </div>
  );
};

export default Main;
