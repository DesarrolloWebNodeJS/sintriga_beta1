import React from 'react';
import { Helmet } from 'react-helmet';
import tema from '../../tema';

import Superior from '../../componentes/zSuperior';
import Estado from '../../componentes/zEstado';
import Inferior from '../../componentes/inferior';

const EstadoPagina = () => {
  return (
    <div>
      <Helmet>
        <title>Estado | SINTRIGA</title>
      </Helmet>
      <Superior
        propEstilo={{ background: 'rgba(0, 0, 0, 0.63)' }}
        propTitulo='Estado'
      />
      <Estado/>
      <Inferior />
    </div>
  );
};

export default tema(EstadoPagina);
