import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { _cmdSistemaIngresar, _cmdSistemaSalir } from '../../base/acciones/ingreso.Acciones';
import { _cmdlimpioAlerta } from '../../base/acciones/alerta.Acciones';

import ingresoMain from './ingresoMain';

const mapStateToProps = state => ({
  tipo: state.alerta.tipo,
  mensaje: state.alerta.mensaje,
  auth: state.ingreso.auth
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdSistemaIngresar,
      _cmdSistemaSalir,
      _cmdlimpioAlerta
    },
    dispatch
  );

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ingresoMain);
