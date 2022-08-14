import React from 'react';
import {Route, Navigate} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../data/constants';


const PrivateRoute = ({render, path, exact, authorizationStatus}) => {
  return (
    <Route
      path={path}
      exact={exact}
      render={(routeProps) => {
        return (
          authorizationStatus === AuthorizationStatus.NO_AUTH
            ? render(routeProps)
            : <Navigate to='/login' replace={true}/>
        );
      }}
    />
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {PrivateRoute};
export default connect(mapStateToProps)(PrivateRoute);
