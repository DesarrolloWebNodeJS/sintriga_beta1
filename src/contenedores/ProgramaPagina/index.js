import React from 'react';
import { Helmet } from 'react-helmet';
import Series from '../../componentes/series';
import Superior from '../../componentes/superior';
import Inferior from '../../componentes/inferior';

const ProgramaPagina = () => {
  return (
    <div>
      <Helmet>
        <title>SINTRIGA</title>
      </Helmet>
      <Superior propEstilo={{ background: 'rgba(0, 0, 0, 0.63)' }} propTitulo='Series de Intriga' />
      <Series />
      <Inferior />
    </div>
  );
};

export default ProgramaPagina;
