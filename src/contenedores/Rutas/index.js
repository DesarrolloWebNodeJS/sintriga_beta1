import React from 'react';
import { Helmet } from 'react-helmet';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import BienvenidoPagina from '../BienvenidoPagina';
import ProgramaPagina from '../ProgramaPagina';
import EstadoPagina from '../EstadoPagina';
import NoEncontradoPagina from '../NoencontradoPagina';
import TestPagina from '../Test';

const Rutas = () => {
  return (
    <div>
      <Helmet>
        <title>Series de Intriga | SINTRIGA</title>
      </Helmet>
      <Router>
        <Switch>
          <Route component={BienvenidoPagina} exact={true} path='/' />
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
