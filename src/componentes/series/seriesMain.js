import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import Alerta from '../alerta';
import './seriesMain.css';

class seriesMain extends Component {
  constructor(props) {
    super(props);
    this.props._cmdlimpioAlerta();
  }

  componentDidMount() {
    this.props._cmdgetSeries();
  }

  render() {
    const { tipo, mensaje } = this.props;
    return (
      <div className='seriesMain'>
        {mensaje && <Alerta mensaje={mensaje} tipo={tipo} />}
        <Loader />
      </div>
    );
  }
}

seriesMain.propTypes = {
  _cmdsatisfactoriaAlerta: PropTypes.func.isRequired,
  _cmderrorAlerta: PropTypes.func.isRequired,
  _cmdadvertenciaAlerta: PropTypes.func.isRequired,
  _cmdinfoAlerta: PropTypes.func.isRequired,
  _cmdlimpioAlerta: PropTypes.func.isRequired,
  _cmdgetSeries: PropTypes.func.isRequired,
  tipo: PropTypes.string,
  mensaje: PropTypes.string
};

export default seriesMain;
