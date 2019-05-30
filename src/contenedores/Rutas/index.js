import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BienvenidoPagina from '../BienvenidoPagina';
import IngresoPagina from '../IngresoPagina';
import ProgramaPagina from '../ProgramaPagina';
import EstadoPagina from '../EstadoPagina';
import NoEncontradoPagina from '../NoencontradoPagina';
import TestPagina from '../Test';

const Rutas = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={BienvenidoPagina} exact={true} path='/' />
          <Route component={IngresoPagina} exact={true} path='/ingreso' />
          <Route component={ProgramaPagina} exact={true} path='/series2019' />
          <Route component={EstadoPagina} exact={true} path='/es' />
          <Route component={TestPagina} exact={true} path='/test' />
          <Route component={NoEncontradoPagina} path='*' />
        </Switch>
      </Router>
    </div>
  );
};

export default Rutas;
