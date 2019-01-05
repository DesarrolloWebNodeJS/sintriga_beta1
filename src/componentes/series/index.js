import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { _cmdsatisfactoriaAlerta, _cmderrorAlerta, _cmdadvertenciaAlerta, _cmdinfoAlerta, _cmdlimpioAlerta } from '../../base/acciones/alerta.Acciones';
import { _cmdgetSeries, _cmdmostrarNuevo, _cmdpostSeries } from '../../base/acciones/series.Acciones';
import seriesMain from './seriesMain';

const mapStateToProps = state => ({
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje,
  catSeries: state.series.catSeries,
  estaCargando: state.series.estaCargando,
  mostrarNuevo: state.series.mostrarNuevo
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdsatisfactoriaAlerta,
      _cmderrorAlerta,
      _cmdadvertenciaAlerta,
      _cmdinfoAlerta,
      _cmdlimpioAlerta,
      _cmdgetSeries,
      _cmdmostrarNuevo,
      _cmdpostSeries
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(seriesMain);
