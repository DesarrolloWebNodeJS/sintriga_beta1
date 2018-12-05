import React from 'react';
import { Helmet } from 'react-helmet';
import plantilla from '../../plantilla/index';
import Series from '../../componentes/series';

const ProgramaPagina = () => {
  return (
    <div>
      <Helmet>
        <title>SINTRIGA</title>
      </Helmet>
      <Series />
    </div>
  );
};

export default plantilla(ProgramaPagina);
