import React from 'react';
import { Helmet } from 'react-helmet';
import Inicio from '../../componentes/inicio';
import Inferior from '../../componentes/inferior';
// TODO: implementar un progress bar y que cambie el texto

const BiePagina = () => {
  return (
    <div>
      <Helmet>
        <title>Bienvenido</title>
      </Helmet>
      <Inicio />
      <Inferior />
    </div>
  );
};

export default BiePagina;
