import React from 'react';
import { Helmet } from 'react-helmet';
import tema from '../../tema';

import Superior from '../../componentes/zSuperior';
import Noencontrado from '../../componentes/404';
import Inferior from '../../componentes/inferior';

const NoencontradoPagina = () => {
  return (
    <div>
      <Helmet>
        <title>404 | SINTRIGA</title>
      </Helmet>
      <Superior
        propTitulo='No existe'
      />
      <Noencontrado />
      <Inferior />
    </div>
  );
};

export default tema(NoencontradoPagina);
