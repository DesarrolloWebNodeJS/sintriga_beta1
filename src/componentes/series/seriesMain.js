import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import Alerta from '../alerta';
import './seriesMain.css';
import ListaSimpleVista from './ListaSimpleVista';

class seriesMain extends Component {
  constructor(props) {
    super(props);
    // this.props._cmdlimpioAlerta();
  }

  componentDidMount() {
    this.props._cmdgetSeries();
  }

  render() {
    const { catSeries, estaCargando, tipo, mensaje } = this.props;
    return (
      <div className='seriesMain'>
        {estaCargando && <Loader />}
        {!estaCargando && <Alerta mensaje={mensaje} tipo={tipo} />}
        {!estaCargando && <ListaSimpleVista series={catSeries} />}
      </div>
    );
  }
}

// {mensaje && <Alerta mensaje={mensaje} tipo={tipo} />}
seriesMain.propTypes = {
  _cmdsatisfactoriaAlerta: PropTypes.func.isRequired,
  _cmderrorAlerta: PropTypes.func.isRequired,
  _cmdadvertenciaAlerta: PropTypes.func.isRequired,
  _cmdinfoAlerta: PropTypes.func.isRequired,
  _cmdlimpioAlerta: PropTypes.func.isRequired,
  _cmdgetSeries: PropTypes.func.isRequired,
  tipo: PropTypes.string,
  mensaje: PropTypes.string,
  catSeries: PropTypes.array,
  estaCargando: PropTypes.bool
};

export default seriesMain;
