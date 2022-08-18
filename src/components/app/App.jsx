import React from "react";
import Main from "../main-page/Main";
import {Routes, Route, useNavigate, Navigate, BrowserRouter} from "react-router-dom";
import Login from "../login/Login";
import MyList from "../mylist/MyList";
import MoviePage from "../movie-page/MoviePage";
import Player from "../video-player/Player";
import AddReview from "../review/AddReview";
import browserHistory from "../../browser-history";
import PrivateComponent from "../private-component/private-component";
// import { connect } from "react-redux";
// import {AuthorizationStatus} from '../../data/constants';

const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<Main />} ></Route>
        <Route exact path='/login' element={<Login />} ></Route>
        <Route exact path='/my-list' element={<PrivateComponent redirectTo='/login' component={<MyList />}/>}></Route>
        <Route path='films/:id' element={<MoviePage />}></Route>
        <Route path='player/' element={<Player />}></Route>
        <Route path='/films/:id/review' element={<AddReview />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
