import React from 'react';
import { Helmet } from 'react-helmet';
import tema from '../../tema';
import Inferior from '../../componentes/inferior';
import Drawer from '../../componentes/zDrawer';

const ProgramaPagina = () => {
  return (
    <div>
      <Helmet>
        <title>Series Intriga | SINTRIGA</title>
      </Helmet>
      <Drawer />
      <Inferior />
    </div>
  );
};

export default tema(ProgramaPagina);
