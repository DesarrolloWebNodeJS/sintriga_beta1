import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { _cmdsatisfactoriaAlerta, _cmderrorAlerta, _cmdadvertenciaAlerta, _cmdinfoAlerta, _cmdlimpioAlerta } from '../../base/acciones/alerta.Acciones';
import { _cmdgetEstado } from '../../base/acciones/estado.Acciones';
import inicioMain from './inicioMain';
import { push } from 'connected-react-router';
import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje,
  estaCargando: state.estado.estaCargando
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdgetEstado,
      _cmdsatisfactoriaAlerta,
      _cmderrorAlerta,
      _cmdadvertenciaAlerta,
      _cmdinfoAlerta,
      _cmdlimpioAlerta,
      changePage: () => push('/series')
    },
    dispatch
  );

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(inicioMain));
