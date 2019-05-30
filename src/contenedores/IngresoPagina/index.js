import React from 'react';
import { Helmet } from 'react-helmet';
import tema from '../../tema';

import Inferior from '../../componentes/inferior';
import Ingreso from '../../componentes/zIngreso';

const IngresoPagina = () => {
  return (
    <div>
      <Helmet>
        <title>Ingreso | SINTRIGA</title>
      </Helmet>
      <Ingreso />
      <Inferior />
    </div>
  );
};

export default tema(IngresoPagina);
