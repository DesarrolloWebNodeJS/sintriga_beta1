import React from 'react';
import { Route, Switch } from 'react-router-dom';
import BienvenidoPagina from './contenedores/home';
/* import ClientesPagina from './contenedores/clientes';
import EditorPagina from './contenedores/editor';
import IngresoPagina from './contenedores/ingreso';
import NosotrosPagina from './contenedores/nosotros';
import NoEncontradoPagina from './contenedores/404'; */

// import IngresoPagina2 from './contenedores/ingreso2/LoginPage';
// import IngresadoPagina from './contenedores/ingresado/LoggedInPage';
// import Footer from './comp/Footer';

const Rutas = () => {
  return (
    <Switch>
      <Route component={BienvenidoPagina} exact={true} path='/' />
    </Switch>
  );
};

export default Rutas;
