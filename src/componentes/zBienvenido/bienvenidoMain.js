import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// NOTA: Incluir el logo posteriormente
import Escribiendo from '../typing';
import Alerta from '../alerta';
import './bienvenidoMain.css';
import Fondo from '../fondo';
import lander1 from '../../recursos/lander1.jpg';
import lander2 from '../../recursos/lander2.jpg';
import lander3 from '../../recursos/lander3.png';
import lander4 from '../../recursos/lander4.png';

const mensajes = [
  'Disfruta de alrededor de 4000 series que tenemos a tu disposición.',
  'Únete a nuestro grupo de WhatsApp.'
];

class bienvenidoMain extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props._cmdgetEstado(10);
  }

  render() {
    const { mensaje, tipo } = this.props;
    return (
      <Fondo imagenes={[lander1, lander2, lander3, lander4]}>
        {mensaje.length > 1 && <Alerta mensaje={mensaje} tipo={tipo} />}
        <div className='bienvenidoMain'>
          <header className='bienvenidoHeader'>
            <Escribiendo mensajes={mensajes} />
            <Button
              component={Link}
              style={{
                color: '#000',
                backgroundColor: '#FFC107',
                borderRadius: '20px',
                fontWeight: '600'
              }}
              to='/series2019'
              variant='outlined'
              >
              ver series
            </Button>
            <div style={{ display: 'flex' }}>
              <div style={{ marginRight: '0.5em' }}>
                <Button
                  component={Link}
                  style={{
                    color: '#000',
                    backgroundColor: '#FFC107',
                    borderRadius: '20px',
                    fontWeight: '600'
                  }}
                  to='/ingreso'
                  variant='outlined'
                  >
                  ¿ya tienes cuenta? ingresa
                </Button>
              </div>
                <Button
                  className='bienvenidoAire'
                  component={Link}
                  style={{
                    color: '#000',
                    backgroundColor: '#FFC107',
                    borderRadius: '20px',
                    fontWeight: '600'
                  }}
                  to='/registro'
                  variant='outlined'
                  >
                  ¿eres nuevo? registrate
                </Button>
            </div>
            <a
              className='bienvenidoLink'
              href='https://fb/sintriga'
              rel='noopener noreferrer'
              target='_blank'
              >
              Visítanos en Facebook
            </a>
          </header>
        </div>
      </Fondo>
    );
  }
}

bienvenidoMain.propTypes = {
  _cmdgetEstado: PropTypes.func.isRequired,
  tipo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired
};

export default bienvenidoMain;
