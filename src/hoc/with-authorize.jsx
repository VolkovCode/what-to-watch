import React from 'react';

const WithAuthorize = ({ComponentForAuthorized, ComponentForUnauthorized}) => {
  const WrappedComponentWithAuthorization = (props) => {
    const isAuthorized = true;

    if (isAuthorized) {
      WrappedComponentWithAuthorization.displayName = `WithAuthorize${ComponentForAuthorized.name}`;
      return <ComponentForAuthorized {...props} />;
    }
    WrappedComponentWithAuthorization.displayName = `WithAuthorize${ComponentForUnauthorized.name}`;
    return <ComponentForUnauthorized {...props} />;
  };
  return WrappedComponentWithAuthorization;
};


export default WithAuthorize;
