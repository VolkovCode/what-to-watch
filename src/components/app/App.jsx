import React from "react";
import Main from "../main-page/main";
import {Routes, Route, BrowserRouter} from "react-router-dom";
import Login from "../login/login";
import MyList from "../my-list/my-list";
import MoviePage from "../movie-page/movie-page";
import Player from "../video-player/Player";
import AddReview from "../review/add-review";
import browserHistory from "../../browser-history";
import PrivateComponent from "../private-component/private-component";


const App = () => {
  return (
    <BrowserRouter history={browserHistory}>
      <Routes>
        <Route path='/' element={<Main />} ></Route>
        <Route exact path='/login' element={<Login />} ></Route>
        <Route path='my-list' element={
          <PrivateComponent redirectTo='/login' >
            <MyList />
          </PrivateComponent>
        }></Route>
        <Route path='films/:id' element={<MoviePage />}></Route>
        <Route path='/films/:id/review' element={
          <PrivateComponent redirectTo='/login' >
            <AddReview />
          </PrivateComponent>
        }></Route>
        <Route path='player/' element={<Player />}></Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
