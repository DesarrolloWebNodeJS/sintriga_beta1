import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import tema from '../../tema';
import Button from '@material-ui/core/Button';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Alerta from '../../componentes/alerta';

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

function mapStateToProps(state) {
  return {
    tipo: state.alerta.tipo,
    mensaje: state.alerta.mensaje
  };
}

class PruebaPagina extends Component {
  render() {
    const { classes, mensaje, tipo } = this.props;
    return (
      <div>
        <Helmet>
          <title>Test | SINTRIGA</title>
        </Helmet>
        <div>
          <AppBar position='static'>
            <Toolbar>
              <IconButton
                aria-label='Menu'
                className={classes.menuButton}
                color='secondary'
                >
                <MenuIcon />
              </IconButton>
              <Typography
                className={classes.flex}
                color='secondary'
                variant='title'
                >
                Test Pagina
              </Typography>
              <Button color='secondary'>Login</Button>
            </Toolbar>
          </AppBar>
        </div>
        <Typography
                className={classes.flex}
                variant='title'
                >
                Test Pagina
              </Typography>
        <Alerta mensaje={!mensaje ? 'Test Pagina' : ''} tipo={tipo} />
        <Button color='primary' variant='contained'>
          Primary
        </Button>
        <Button color='secondary' variant='contained'>
          Secondary
        </Button>
      </div>
    );
  }
}
PruebaPagina.propTypes = {
  classes: PropTypes.object.isRequired,
  tipo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired
};

export default tema(withStyles(styles)(connect(mapStateToProps)(PruebaPagina)));
