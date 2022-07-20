import React from "react";
import Card from "../card/card";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";

const MyList = ({movies}) => {
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

        {<Card movies={movies}/>}
      </section>

      <Footer />
    </div>
  );
};

export default MyList;
