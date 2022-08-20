import React, {useState} from "react";
import {connect} from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import {login} from "../../store/api-actions";
// import {Link} from "react-router-dom";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";

const Login = ({userLogin}) => {
  const navigate = useNavigate();
  const location = useLocation();

  const fromPage = location.state ? location.state.from.pathname : `/`;
  console.log(fromPage)
  const [email, setLogin] = useState(``);
  const [password, setPassword] = useState(``);

  const onClickHandlerLogin = (e) => {
    e.preventDefault();
    userLogin({login: email, password});
    navigate(fromPage);
  };

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                value={email}
                onChange={(e) => setLogin(e.target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-password">
                Password
              </label>
            </div>
          </div>
          <div className="sign-in__submit">
            <button onClick={(e) => onClickHandlerLogin(e)} className="sign-in__btn" type="submit">
              Sign in
            </button>
          </div>
        </form>
      </div>
      <Footer />
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  userLogin({login: email, password}) {
    dispatch(login({login: email, password}));
  }
});

export {Login};
export default connect(null, mapDispatchToProps)(Login);
