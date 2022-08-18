import React from 'react';
import {Route, Navigate } from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../data/constants';


const PrivateComponent = ({component, redirectTo, authorizationStatus}) => {
  return (
    authorizationStatus !== AuthorizationStatus.NO_AUTH
      ? component
      : <Navigate to={redirectTo} replace={true}/>
  );
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {PrivateComponent};
export default connect(mapStateToProps)(PrivateComponent);
