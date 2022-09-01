import React, {useEffect, useRef} from "react";
import {connect} from "react-redux";
import {useLocation, useNavigate} from "react-router-dom";
import {AuthorizationStatus} from "../../data/constants";
import {login} from "../../store/api-actions";
import {getisAuthorizationError} from "../../store/selectors";
import Footer from "../footer/Footer";
import Logo from "../logo/Logo";

const Login = ({userLogin, isAuthorizationError, authorizationStatus}) => {
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef();
  const passwordRef = useRef();

  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const fromPage = location.state ? -1 : `/`;

  const onClickHandlerLogin = (e) => {
    e.preventDefault();
    userLogin(
        {email: emailRef.current.value, password: passwordRef.current.value}
    );
  };

  useEffect(() => {
    if (isAuthorized) {
      navigate(fromPage);
    }
  }, [isAuthorized]);

  const message = (
    <div className="sign-in__message">
      <p>Please enter a valid email address</p>
    </div>);

  return (
    <div className="user-page">
      <header className="page-header user-page__head">
        <Logo />

        <h1 className="page-title user-page__title">Sign in</h1>
      </header>

      <div className="sign-in user-page__content">
        <form action="#" className="sign-in__form">
          {isAuthorizationError && message}
          <div className="sign-in__fields">
            <div className="sign-in__field">
              <input
                ref={emailRef}
                className="sign-in__input"
                type="email"
                placeholder="Email address"
                name="user-email"
                id="user-email"
                required
              />
              <label className="sign-in__label visually-hidden" htmlFor="user-email">
                Email address
              </label>
            </div>
            <div className="sign-in__field">
              <input
                ref={passwordRef}
                className="sign-in__input"
                type="password"
                placeholder="Password"
                name="user-password"
                id="user-password"
                required
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

const mapStateToProps = (state) => ({
  isAuthorizationError: getisAuthorizationError(state),
  authorizationStatus: state.authorizationStatus,
});

const mapDispatchToProps = (dispatch) => ({
  userLogin({email, password}) {
    dispatch(login({email, password}));
  }
});

export {Login};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
