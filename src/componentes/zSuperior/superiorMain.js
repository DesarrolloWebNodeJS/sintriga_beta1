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
  superiorColor: {
    color: '#ffc107'
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
      // NOTA: autentificacion false por defecto
      auth: true,
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
      _cmdmostrarNuevo,
      propBuscador,
      classes,
      abierto
    } = this.props;

    const { auth, anchorEl } = this.state;
    const open = Boolean(anchorEl);
    return (
      <div>
        <AppBar
          className={classNames(classes.appBar, abierto && classes.appBarShift)}
          color={propColor}
          position={propPosicion}
          style={propEstilo}
          >
          <Toolbar
            className={classes.superiorMain}
            disableGutters={!this.state.open}
            variant='dense'
            >
            <div className={classes.superiorColor}>
              <IconButton
                aria-label='Abrir panel'
                className={classNames(
                  classes.menuButton,
                  abierto && classes.menuButtonHidden
                )}
                color='inherit'
                onClick={this.handleDrawerOpen}
                >
                <MenuIcon />
              </IconButton>
            </div>
            {propBuscador ? (
              <div className={classes.superiorColor}>Soy el buscador..</div>
            ) : (
              <div className={classes.superiorColor}>
                <Button color='inherit' component={Link} to='./'>
                  {propTitulo}
                </Button>
              </div>
            )}
            <div className={classes.superiorColor}>
              {auth ? (
                <span>
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
                </span>
              ) : (
                <span>
                  <Tooltip title='Facebook'>
                    <IconButton aria-label='Facebook' color='inherit'>
                      <Apps />
                    </IconButton>
                  </Tooltip>
                  <Tooltip title='Whatsapp'>
                    <IconButton aria-label='Whatsapp' color='inherit'>
                      <Apps />
                    </IconButton>
                  </Tooltip>
                </span>
              )}
              <Tooltip title='Ayuda'>
                <IconButton aria-label='Ayuda' color='inherit'>
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
  propColor: 'inherit',
  propPosicion: 'fixed',
  propBuscador: false,
  abierto: false
};

superiorMain.propTypes = {
  propTitulo: PropTypes.string,
  propColor: PropTypes.string,
  propEstilo: PropTypes.object,
  propPosicion: PropTypes.string,
  _cmdmostrarNuevo: PropTypes.func,
  propBuscador: PropTypes.bool,
  classes: PropTypes.object.isRequired,
  abierto: PropTypes.bool.isRequired
};

export default withStyles(styles)(superiorMain);
