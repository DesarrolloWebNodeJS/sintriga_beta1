import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Loader from '../loader';
import Alerta from '../alerta';
import './seriesMain.css';
import Grilla from '../grilla';
import Dialog from '../dialog';
// import ListaSimpleVista from './ListaSimpleVista';

class seriesMain extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props._cmdlimpioAlerta();
  }

  componentDidMount() {
    this.props._cmdgetSeries();
  }

  render() {
    const { catSeries, estaCargando, tipo, mensaje, mostrarNuevo, _cmdmostrarNuevo, _cmdpostSeries } = this.props;
    return (
      <div className='seriesMain'>
        {estaCargando && <Loader />}
        {!estaCargando && <Alerta mensaje={mensaje} tipo={tipo} />}
        {!estaCargando && <Grilla tileData={catSeries} />}
        {mostrarNuevo && <Dialog cmdmostrarNuevo={_cmdmostrarNuevo} cmdpostSeries={_cmdpostSeries} open={mostrarNuevo} />}
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
  _cmdmostrarNuevo: PropTypes.func,
  _cmdpostSeries: PropTypes.func,
  tipo: PropTypes.string,
  mensaje: PropTypes.string,
  catSeries: PropTypes.array,
  estaCargando: PropTypes.bool,
  mostrarNuevo: PropTypes.bool
};

export default seriesMain;
