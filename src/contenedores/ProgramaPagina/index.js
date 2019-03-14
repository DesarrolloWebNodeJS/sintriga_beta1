import React from 'react';
// import Series from '../../componentes/zSeries';
// import Superior from '../../componentes/zSuperior';
import Inferior from '../../componentes/inferior';
import Drawer from '../../componentes/zDrawer';
// NOTA: Mostrar iconos en el Superior dependiendo si esta logeado o no.

const ProgramaPagina = () => {
  return (
    <div>
      <Drawer />
      <Inferior />
    </div>
  );
};

export default ProgramaPagina;
