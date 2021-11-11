import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../../Hook/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const {user} = useAuth();


    return (
        <Route
      {...rest}
      render={({ location }) =>
        user.Email ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;