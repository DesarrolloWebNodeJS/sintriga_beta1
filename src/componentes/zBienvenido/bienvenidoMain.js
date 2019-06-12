import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Escribiendo from '../typing';
import Alerta from '../alerta';
import './bienvenidoMain.css';
import Fondo from '../fondo';
import lander1 from '../../recursos/lander1.jpg';
import lander2 from '../../recursos/lander2.jpg';
import lander3 from '../../recursos/lander3.png';
import lander4 from '../../recursos/lander4.png';
import Avatarbig from '../avatarbig';

const mensajes = [
  'Alrededor de 4000 series.',
  'Agrega favoritos, series nuevas y más.',
  'Únete al legendario grupo de WhatsApp.'
];

class bienvenidoMain extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props._cmdgetEstado(10);
  }

  render() {
    const { mensaje, tipo, auth } = this.props;
    return (
      <Fondo imagenes={[lander1, lander2, lander3, lander4]}>
        {mensaje.length > 1 && <Alerta mensaje={mensaje} tipo={tipo} />}
        <div className='box3 aire2'>
          <Avatarbig/>
          <Escribiendo mensajes={mensajes} />
        </div>
        {auth ? (
          <div className='box2'>
            <div>{' '}</div>
            <Button
              color='secondary'
              component={Link}
              style={{
                borderRadius: '20px',
                fontWeight: '600'
              }}
              to='/series2019'
              variant='contained'
              >
              ver series
            </Button>
          </div>
        ) : (
          <div className='box2'>
            <Button
              color='primary'
              component={Link}
              style={{
                borderRadius: '20px',
                fontWeight: '600',
                margin: '15px'
              }}
              to='/ingreso'
              variant='contained'
              >
              ¿ya tienes cuenta? ingresa
            </Button>
            <Button
              className='bienvenidoAire'
              color='secondary'
              component={Link}
              style={{
                borderRadius: '20px',
                fontWeight: '600',
                margin: '15px'
              }}
              to='/registro'
              variant='contained'
              >
              ¿eres nuevo? registrate
            </Button>
          </div>
        )}
      </Fondo>
    );
  }
}

bienvenidoMain.propTypes = {
  _cmdgetEstado: PropTypes.func.isRequired,
  tipo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired,
  auth: PropTypes.bool.isRequired
};

export default bienvenidoMain;
