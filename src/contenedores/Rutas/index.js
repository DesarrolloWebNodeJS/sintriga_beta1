import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BienvenidoPagina from '../BienvenidoPagina';
import ProgramaPagina from '../ProgramaPagina';

const Rutas = () => {
  return (
    <Router>
      <Switch>
        <Route component={BienvenidoPagina} exact={true} path='/' />
        <Route component={ProgramaPagina} exact={true} path='/series' />
      </Switch>
    </Router>
  );
};

export default Rutas;
