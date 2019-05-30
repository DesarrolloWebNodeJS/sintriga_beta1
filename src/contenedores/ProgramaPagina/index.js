import React from 'react';
import { Helmet } from 'react-helmet';
import tema from '../../tema';

// import Series from '../../componentes/zSeries';
// import Superior from '../../componentes/zSuperior';
import Inferior from '../../componentes/inferior';
import Drawer from '../../componentes/zDrawer';
// NOTA: Mostrar iconos en el Superior dependiendo si esta logeado o no.

const ProgramaPagina = () => {
  return (
    <div>
      <Helmet>
        <title>Series de Intriga | SINTRIGA</title>
      </Helmet>
      <Drawer />
      <Inferior />
    </div>
  );
};

export default tema(ProgramaPagina);
