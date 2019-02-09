/* eslint-disable no-unused-vars */
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
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { Link } from 'react-router-dom';
import './superior.css';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormGroup from '@material-ui/core/FormGroup';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

class superiorMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
      auth: false,
      anchorEl: null
    };
    this.handleMenu = this.handleMenu.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ auth: event.target.checked });
  }

  handleMenu(event) {
    this.setState({ anchorEl: event.currentTarget });
  }

  handleClose() {
    this.setState({ anchorEl: null });
  }

  render() {
    const {
      propColor,
      propTitulo,
      propEstilo,
      propPosicion,
      _cmdmostrarNuevo
    } = this.props;

    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);

    return (
      <div>
        <FormGroup>
          <FormControlLabel
            control={
              <Switch
                aria-label='LoginSwitch'
                checked={auth}
                onChange={this.handleChange}
              />
            }
            label={auth ? 'Logout' : 'Login'}
          />
        </FormGroup>

        <AppBar color={propColor} position={propPosicion} style={propEstilo}>
          <Toolbar className='superiorMain' variant='dense'>
            <div className='superiorColor'>
              <Button color='inherit' component={Link} to='./'>
                {propTitulo}
              </Button>
            </div>
            {auth && (
              <div className='superiorColor'>
                <IconButton
                  aria-haspopup='true'
                  aria-owns={open ? 'menu-appbar' : null}
                  color='inherit'
                  onClick={this.handleMenu}
                  >
                  <AccountCircle />
                </IconButton>
                <Menu
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  id='menu-appbar'
                  onClose={this.handleClose}
                  open={open}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right'
                  }}
                  >
                  <MenuItem onClick={this.handleClose}>Profile</MenuItem>
                  <MenuItem onClick={this.handleClose}>My account</MenuItem>
                </Menu>

                <Tooltip title='Nuevo'>
                  <IconButton
                    aria-label='Nuevo'
                    color='inherit'
                    onClick={_cmdmostrarNuevo}
                    >
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
            )}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

superiorMain.defaultProps = {
  propTitulo: 'bienvenidos',
  propColor: 'inherit',
  propPosicion: 'fixed'
};

superiorMain.propTypes = {
  propTitulo: PropTypes.string,
  propColor: PropTypes.string,
  propEstilo: PropTypes.object,
  propPosicion: PropTypes.string,
  _cmdmostrarNuevo: PropTypes.func
};

export default superiorMain;
