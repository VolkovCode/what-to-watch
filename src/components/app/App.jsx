import React from "react";
import Main from "../main-page/Main";
import {genres, movies} from "../../data/mock-data.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../login/Login";
import MyList from "../mylist/MyList";
import MoviePage from "../movie-page/MoviePage";
import MoviePageDetails from "../movie-page/MoviePageDetails";
import Player from "../player/Player";
import AddReview from "../review/AddReview";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main genres={genres} movies={movies}/>} ></Route>
        <Route exact path='/login' element={<Login />} ></Route>
        <Route path='/mylist' element={<MyList movies={movies}/>}></Route>
        <Route path='films/:id' element={<MoviePage />}></Route>
        <Route path='player/' element={<Player />}></Route>
        <Route path='/films/:id/review' element={<AddReview />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
