import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { _cmdsatisfactoriaAlerta, _cmderrorAlerta, _cmdadvertenciaAlerta, _cmdinfoAlerta, _cmdlimpioAlerta } from '../../base/acciones/alerta.Acciones';
import seriesMain from './seriesMain';

const mapStateToProps = state => ({
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdsatisfactoriaAlerta,
      _cmderrorAlerta,
      _cmdadvertenciaAlerta,
      _cmdinfoAlerta,
      _cmdlimpioAlerta
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(seriesMain);
