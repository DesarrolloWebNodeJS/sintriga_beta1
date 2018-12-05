import React from 'react';
import PropTypes from 'prop-types';

const ListaSimpleVista = props => {
  return (
    <div>
      <ul >
        {props.clientes.map(clientes => (
          <li key={clientes.actor_id}>
            {clientes.first_name} - {clientes.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
};

ListaSimpleVista.propTypes = {
  clientes: PropTypes.array.isRequired
};

export default ListaSimpleVista;
