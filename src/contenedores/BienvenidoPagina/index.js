import React from 'react';
import Bienvenido from '../../componentes/zBienvenido';
import Superior from '../../componentes/zSuperior';
import Inferior from '../../componentes/inferior';

// TODO: implementar un progress bar y que cambie el texto

const BienvenidoPagina = () => {
  return (
    <div>
      <Superior propEstilo={{ background: 'rgba(0, 0, 0, 0.63)' }} propTitulo='Series de Intriga'/>
      <Bienvenido />
      <Inferior />
    </div>
  );
};

export default BienvenidoPagina;
