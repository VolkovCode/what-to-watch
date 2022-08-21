import React from 'react';
import {connect} from 'react-redux';
import { AuthorizationStatus } from '../../data/constants';
import Logo from '../logo/Logo';
import AvatarBlock from './user-block/avater-block';
import SigninBlock from './user-block/signin-block';

const Header = ({authorizationStatus}) => {
  const isAuthorized = authorizationStatus === AuthorizationStatus.AUTH;
  const userBlock = isAuthorized ? <AvatarBlock /> : <SigninBlock />;
  return (
    <header className="page-header">
      <Logo />
      {userBlock}
    </header>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});

export {Header};
export default connect(mapStateToProps)(Header);
