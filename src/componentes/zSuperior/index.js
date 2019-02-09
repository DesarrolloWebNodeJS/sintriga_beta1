import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
// import { _cmdsatisfactoriaAlerta, _cmderrorAlerta, _cmdadvertenciaAlerta, _cmdinfoAlerta, _cmdlimpioAlerta } from '../../base/acciones/alerta.Acciones';
import { _cmdmostrarNuevo } from '../../base/acciones/series.Acciones';
import superiorMain from './superiorMain';
// import { push } from 'connected-react-router';
// import { withRouter } from 'react-router-dom';

const mapStateToProps = state => ({
  mostrarNuevo: state.series.mostrarNuevo,
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdmostrarNuevo
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(superiorMain);
