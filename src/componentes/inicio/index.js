import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { _cmdsatisfactoriaAlerta, _cmderrorAlerta, _cmdadvertenciaAlerta, _cmdinfoAlerta, _cmdlimpioAlerta } from '../../base/acciones/alerta.Acciones';
import inicioMain from './inicioMain';
import { push } from 'connected-react-router';

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
      _cmdlimpioAlerta,
      changePage: () => push('/series')
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(inicioMain);
