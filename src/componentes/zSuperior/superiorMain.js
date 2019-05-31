import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import Button from '@material-ui/core/Button';
import MenuIcono from '@material-ui/icons/Settings';
import MenuIcon from '@material-ui/icons/Menu';
import NuevoIcono from '@material-ui/icons/AddCircle';
import AyudaIcono from '@material-ui/icons/LiveHelp';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Apps from '@material-ui/icons/Apps';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

const drawerWidth = 240;

const styles = theme => ({
  superiorMain: {
    paddingLeft: 17,
    paddingRight: 24,
    justifyContent: 'space-between'
  },
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButtonHidden: {
    display: 'none'
  },
  toolbar: {
    paddingRight: 24
  }
});

class superiorMain extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  componentWillUnmount() {
    this.props._cmdresetDrawer();
  }

  render() {
    const {
      propColor,
      propTitulo,
      propEstilo,
      propPosicion,
      _cmdmostrarNuevo,
      propBuscador,
      classes,
      abiertoDrawer,
      _cmdmostrarDrawer,
      propmostrarDrawer,
      auth
    } = this.props;

    const { anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <AppBar
          className={classNames(
            classes.appBar,
            abiertoDrawer && classes.appBarShift
          )}
          color={propColor}
          position={propPosicion}
          style={propEstilo}
          >
          <Toolbar
            className={classes.superiorMain}
            disableGutters={!abiertoDrawer}
            variant='dense'
            >
            {propmostrarDrawer ? (
              <div>
                <IconButton
                  aria-label='Abrir panel'
                  className={classNames(
                    classes.menuButton,
                    abiertoDrawer && classes.menuButtonHidden
                  )}
                  color='secondary'
                  onClick={_cmdmostrarDrawer}
                  >
                  <MenuIcon />
                </IconButton>
                <Button color='secondary' component={Link} to='./'>
                  {propTitulo}
                </Button>
              </div>
            ) : (
              <div>
                <Button color='secondary' component={Link} to='./'>
                  {propTitulo}
                </Button>
              </div>
            )}

            {propBuscador && auth && <div>Soy el buscador..</div>}
            <div>
              {auth ? (
                <span>
                  <IconButton
                    aria-haspopup='true'
                    aria-owns={open ? 'menu-appbar' : null}
                    color='secondary'
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
                    <MenuItem onClick={this.handleClose}>Perfil</MenuItem>
                    <MenuItem onClick={this.handleClose}>Mi Cuenta</MenuItem>
                    <MenuItem onClick={this.handleChange}>Salir</MenuItem>
                  </Menu>

                  <Tooltip title='Nuevo'>
                    <IconButton
                      aria-label='Nuevo'
                      color='secondary'
                      onClick={_cmdmostrarNuevo}
                      >
                      <NuevoIcono />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Configuración'>
                    <IconButton aria-label='Ingreso' color='secondary'>
                      <MenuIcono />
                    </IconButton>
                  </Tooltip>
                  <Button color='secondary' onClick={this.handleChange}>
                    Salir
                  </Button>
                </span>
              ) : (
                <span>
                  <Tooltip title='Facebook'>
                    <IconButton aria-label='Facebook' color='secondary'>
                      <Apps />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Whatsapp'>
                    <IconButton aria-label='Whatsapp' color='secondary'>
                      <Apps />
                    </IconButton>
                  </Tooltip>
                  <Button
                    color='secondary'
                    component={Link}
                    onClick={this.handleChange}
                    to='./ingreso'
                    >
                    Ingresar
                  </Button>
                </span>
              )}
              <Tooltip title='Ayuda'>
                <IconButton aria-label='Ayuda' color='secondary'>
                  <AyudaIcono />
                </IconButton>
              </Tooltip>
            </div>
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

superiorMain.defaultProps = {
  propTitulo: 'bienvenidos',
  propColor: 'primary',
  propPosicion: 'fixed',
  propBuscador: false,
  abiertoDrawer: false,
  propmostrarDrawer: false
};

superiorMain.propTypes = {
  propTitulo: PropTypes.string,
  propColor: PropTypes.string,
  propEstilo: PropTypes.object,
  propPosicion: PropTypes.string,
  _cmdmostrarNuevo: PropTypes.func,
  propBuscador: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  abiertoDrawer: PropTypes.bool.isRequired,
  propmostrarDrawer: PropTypes.bool.isRequired,
  _cmdmostrarDrawer: PropTypes.func.isRequired,
  _cmdresetDrawer: PropTypes.func.isRequired,
  auth: PropTypes.bool.isRequired
};

export default withStyles(styles)(superiorMain);
