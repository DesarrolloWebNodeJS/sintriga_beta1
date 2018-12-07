import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BienvenidoPagina from '../BiePagina';
import ProgramaPagina from '../ProgramaPagina';

const Rutas = () => {
  return (
    <Switch>
      <Route component={BienvenidoPagina} exact={true} path='/' />
      <Route component={ProgramaPagina} exact={true} path='/series' />
    </Switch>
  );
};

export default Rutas;
