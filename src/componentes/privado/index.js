import React from 'react';
import PropTypes from 'prop-types';
import { Route, Redirect } from 'react-router-dom';

export const Privado = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
      localStorage.getItem('user')
          ? <Component {...props} />
          : <Redirect to={{ pathname: '/ingreso', state: { from: props.location } }} />
  )}
  />
);

Privado.propTypes = {
  location: PropTypes.object,
  component: PropTypes.func.isRequired
};
