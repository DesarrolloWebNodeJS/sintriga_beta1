// import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import ingresoMain from './ingresoMain';

const mapStateToProps = state => ({
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje
});

/* const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdgetEstado
    },
    dispatch
  ); */

export default connect(
  mapStateToProps,
  null
)(ingresoMain);
