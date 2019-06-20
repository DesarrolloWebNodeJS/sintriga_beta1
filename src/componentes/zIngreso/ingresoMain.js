import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import Fondo from '../fondo';
import Alerta from '../alerta';
// TODO: handlear el loader
// import Loader from '../loader';
import IngresoUno from '../ingreso3';
import lander1 from '../../recursos/lander1.jpg';
import lander2 from '../../recursos/lander2.jpg';
import lander3 from '../../recursos/lander3.png';
import lander4 from '../../recursos/lander4.png';

class ingresoMain extends Component {

  componentDidMount() {
    this.props._cmdlimpioAlerta();
  }

  render() {
    const { _cmdSistemaIngresar, mensaje, tipo, auth } = this.props;
    return (
      <Fondo imagenes={[lander1, lander2, lander3, lander4]}>
        {auth && <Redirect to='/series2019' />}
        {!auth && <IngresoUno auth={auth} cmdSistemaIngresar={_cmdSistemaIngresar}/>}
        {mensaje.length > 1 && <Alerta mensaje={mensaje} tipo={tipo} />}
      </Fondo>
    );
  }
}

ingresoMain.propTypes = {
  _cmdSistemaIngresar: PropTypes.func.isRequired,
  _cmdSistemaSalir: PropTypes.func.isRequired,
  _cmdlimpioAlerta: PropTypes.func.isRequired,
  tipo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired,
  auth: PropTypes.bool.isRequired
};

export default ingresoMain;
