import React from 'react';
import PropTypes from 'prop-types';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
// import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from '@material-ui/core/ListItemText';
import Checkbox from '@material-ui/core/Checkbox';

const ListaVista = ({ clientes }) => {
  return (
    <List>
      {clientes &&
        clientes.map(clientes => (
          <ListItem button dense disableGutters divider key={clientes.actor_id}>
            <Checkbox disableRipple tabIndex={-1} />
            <div>
              <ListItemText primary={clientes.actor_id} />
            </div>
            <div>
              <ListItemText
                primary={clientes.first_name}
                secondary={clientes.last_name}
              />
            </div>
          </ListItem>
        ))}
    </List>
  );
};

ListaVista.propTypes = {
  clientes: PropTypes.array.isRequired
};

export default ListaVista;
