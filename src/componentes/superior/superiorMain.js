import React, { Component } from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcono from '@material-ui/icons/Settings';
import NuevoIcono from '@material-ui/icons/AddCircle';
import AyudaIcono from '@material-ui/icons/LiveHelp';
import { Link } from 'react-router-dom';
import './superior.css';

class superiorMain extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      propColor,
      propTitulo,
      propEstilo,
      propPosicion,
      _cmdmostrarNuevo
    } = this.props;
    return (
      <AppBar color={propColor} position={propPosicion} style={propEstilo}>
        <Toolbar className='superiorMain' variant='dense'>
          <div className='superiorColor'>
            <Button color='inherit' component={Link} to='./'>
              {propTitulo}
            </Button>
          </div>
          <div className='superiorColor'>
            <Tooltip title='Nuevo'>
              <IconButton aria-label='Nuevo' color='inherit' onClick={_cmdmostrarNuevo}>
                <NuevoIcono />
              </IconButton>
            </Tooltip>
            <Tooltip title='Configuración'>
              <IconButton aria-label='Ingreso' color='inherit'>
                <MenuIcono />
              </IconButton>
            </Tooltip>
            <Tooltip title='Ayuda'>
              <IconButton aria-label='Ayuda' color='inherit'>
                <AyudaIcono />
              </IconButton>
            </Tooltip>
          </div>
        </Toolbar>
      </AppBar>
    );
  }
}

superiorMain.defaultProps = {
  propTitulo: 'bienvenidos',
  propColor: 'inherit',
  propPosicion: 'static'
};

superiorMain.propTypes = {
  propTitulo: PropTypes.string,
  propColor: PropTypes.string,
  propEstilo: PropTypes.object,
  propPosicion: PropTypes.string,
  _cmdmostrarNuevo: PropTypes.func
};

export default superiorMain;
