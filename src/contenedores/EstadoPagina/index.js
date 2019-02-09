import React from 'react';
import Superior from '../../componentes/zSuperior';
import Inferior from '../../componentes/inferior';

const EstadoPagina = () => {
  return (
    <div>
      <Superior
        propEstilo={{ background: 'rgba(0, 0, 0, 0.63)' }}
        propTitulo='Estado'
      />
      <h1>
        TODO: Conectar a redux el componente. y hacer peticiones GET sobre info del
        servidor.
      </h1>
      <Inferior />
    </div>
  );
};

export default EstadoPagina;
