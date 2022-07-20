import React from "react";
import Main from "../main-page/Main";
import {genres, movies} from "../../data/mock-data.js";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Login from "../login/Login";
import MyList from "../mylist/MyList";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main genres={genres} movies={movies}/>} ></Route>
        <Route exact path='/login' element={<Login />} ></Route>
        <Route path='/mylist' element={<MyList />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
