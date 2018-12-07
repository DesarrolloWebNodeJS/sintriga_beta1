import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import Alerta from '../alerta';
import './seriesMain.css';

class seriesMain extends Component {
  componentDidMount() {
    this.props._success('Todas las series cargadas correctamente.');
  }

  render() {
    const { tipo, mensaje, color } = this.props;
    return (
      <div className='seriesMain'>
        <h2>Welcome to Account Tracking Website</h2>
        {mensaje && (
          <Alerta mensaje={mensaje}/>
        )}
        <Loader />
        <p>{tipo + mensaje + color} NO NAM</p>
      </div>
    );
  }
}

seriesMain.propTypes = {
  _success: PropTypes.func.isRequired,
  _error: PropTypes.func.isRequired,
  _clear: PropTypes.func.isRequired,
  tipo: PropTypes.string,
  mensaje: PropTypes.string,
  color: PropTypes.string
};

export default seriesMain;
