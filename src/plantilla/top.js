import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
// core
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
// iconos
import MenuIcono from '@material-ui/icons/Settings';
// import LightbulbOutlineIcon from '@material-ui/icons/Feedback';
// import LightbulbFullIcon from '@material-ui/icons/FeedbackOutlined';
// TODO: bindiar los right iconos busqueda y vistas

const estilos = {
  bie: {
    justifyContent: 'space-between'
  }
};

class Top extends Component {
  render() {
    const { classes, propColor, propTitulo, propEstilo, propPosicion } = this.props;

    return (
      <AppBar color={propColor} position={propPosicion} style={propEstilo} >
        <Toolbar className={classes.bie}>
          <div>
            <Button color='inherit' component={ Link } to='./'>{propTitulo}</Button>
          </div>
          <div>
            <Tooltip title='Configuración'>
              <IconButton aria-label='Ingreso' color='secondary'>
                <MenuIcono />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}
Top.defaultProps = {
  propTitulo: 'bienvenidos',
  propColor: 'primary',
  propPosicion: 'static'
};

Top.propTypes = {
  classes: PropTypes.object.isRequired,
  propTitulo: PropTypes.string,
  propColor: PropTypes.string,
  propEstilo: PropTypes.object,
  propPosicion: PropTypes.string
};

export default withStyles(estilos)(Top);
