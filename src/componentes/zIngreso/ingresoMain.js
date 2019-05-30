import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Fondo from '../fondo';
import Alerta from '../alerta';
import IngresoUno from '../ingreso1';
import lander1 from '../../recursos/lander1.jpg';
import lander2 from '../../recursos/lander2.jpg';
import lander3 from '../../recursos/lander3.png';
import lander4 from '../../recursos/lander4.png';

class ingresoMain extends Component {
  render() {
    const { mensaje, tipo } = this.props;
    return (
      <Fondo imagenes={[lander1, lander2, lander3, lander4]}>
        {mensaje.length > 1 && <Alerta mensaje={mensaje} tipo={tipo} />}
        <IngresoUno/>
      </Fondo>
    );
  }
}

ingresoMain.propTypes = {
  tipo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired
};

export default ingresoMain;
