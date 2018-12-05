import React from 'react';
import PropTypes from 'prop-types';
import AttachmentIcon from '@material-ui/icons/Attachment';
import IconButton from '@material-ui/core/IconButton';

const Imp = ({ clientes, totalClientes }) => {
  return (
    <div style={{ fontFamily: 'consolas', textAlign: 'center' }}>
      <h1>
        <u>Total Clientes: {totalClientes}</u>
      </h1>
      {clientes &&
        clientes.map(clientes => (
          <li key={clientes.actor_id} style={{listStyle: 'none'}}>
            {clientes.first_name} - {clientes.last_name}
          </li>
        ))}
      <h4>Attachments</h4>
      <hr />
      <IconButton>
        <AttachmentIcon /> AttachmentIcon
      </IconButton>
    </div>
  );
};

Imp.propTypes = {
  clientes: PropTypes.array.isRequired,
  totalClientes: PropTypes.number
};

export default Imp;
