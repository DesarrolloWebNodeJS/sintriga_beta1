import React from 'react';
import PropTypes from 'prop-types';

const ListaSimpleVista = props => {
  return (
    <div>
      <ul >
        {props.series.map(clientes => (
          <li key={clientes.actor_id}>
            {clientes.titulo} - {clientes.descripcion}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListaSimpleVista.propTypes = {
  series: PropTypes.array.isRequired
};

export default ListaSimpleVista;
