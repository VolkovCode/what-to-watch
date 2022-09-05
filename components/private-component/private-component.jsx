import React from 'react';
import {Navigate, useLocation} from 'react-router-dom';
import {connect} from 'react-redux';
import {AuthorizationStatus} from '../../data/constants';


const PrivateComponent = ({children, redirectTo, authorizationStatus}) => {
  const location = useLocation();

  if (authorizationStatus !== AuthorizationStatus.AUTH) {
    return <Navigate to={redirectTo} state={{from: location}} replace={true}/>;
  }

  return children;
};

const mapStateToProps = (state) => ({
  authorizationStatus: state.authorizationStatus,
});


export {PrivateComponent};
export default connect(mapStateToProps)(PrivateComponent);
