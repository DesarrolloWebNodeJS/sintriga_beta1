import React from 'react';
import Series from '../../componentes/zSeries';
import Superior from '../../componentes/zSuperior';
import Inferior from '../../componentes/inferior';

const ProgramaPagina = () => {
  return (
    <div>
      <Superior propEstilo={{ background: 'rgba(0, 0, 0, 0.63)' }} propTitulo='Catálogo de Series' />
      <Series />
      <Inferior />
    </div>
  );
};

export default ProgramaPagina;
