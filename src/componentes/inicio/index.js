import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';
import { _success, _error, _clear } from '../../base/acciones/alerta.Acciones';
import inicioMain from './inicioMain';

const mapStateToProps = state => ({
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje,
  color: state.alerta.color
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _success,
      _error,
      _clear,
      changePage: () => push('/series')
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(inicioMain);
