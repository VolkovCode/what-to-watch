import React from "react";
import Main from "../main-page/Main";
import {genres, movies} from "../../data/mock-data.js";

const App = () => {
  return (
    <div><Main genres={genres} movies={movies}/></div>
  );
};

export default App;
