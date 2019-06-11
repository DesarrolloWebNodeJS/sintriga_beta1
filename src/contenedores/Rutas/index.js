import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// Auth
// import PrivadoWrapper from "./components/Wrapper";
import { Privado } from '../../componentes/privado';
import BienvenidoPagina from '../BienvenidoPagina';
import IngresoPagina from '../IngresoPagina';
import ProgramaPagina from '../ProgramaPagina';
import EstadoPagina from '../EstadoPagina';
import NoEncontradoPagina from '../NoencontradoPagina';
import TestPagina from '../Test';

// const wrapperDashboard = estaLogueado(ProgramaPagina);
// const wrapperOrders = Wrapper(Orders);
// const wrapperReports = Wrapper(Reports);
// const wrapperIntegrations = Wrapper(Integrations);
// const wrapperCustomers = Wrapper(Customers);

const Rutas = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route component={BienvenidoPagina} exact={true} path='/' />
          <Route component={IngresoPagina} exact={true} path='/ingreso' />
          <Privado component={ProgramaPagina} exact path='/series2019' />
          <Route component={EstadoPagina} exact={true} path='/es' />
          <Route component={TestPagina} exact={true} path='/test' />
          <Route component={NoEncontradoPagina} path='*' />
        </Switch>
      </Router>
    </div>
  );
};

export default Rutas;
