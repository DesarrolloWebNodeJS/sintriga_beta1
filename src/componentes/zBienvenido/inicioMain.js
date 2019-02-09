import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
// NOTA: Incluir el logo posteriormente
import Escribiendo from '../typing';
import Alerta from '../alerta';
import './inicioMain.css';
import Fondo from '../fondo';
import lander1 from '../../recursos/lander1.png';
import lander2 from '../../recursos/lander2.png';
import lander3 from '../../recursos/lander3.png';

const mensajes = [
  'Disfruta de alrededor de 4000 series que tenemos a tu disposición.',
  'Únete a nuestro grupo de WhatsApp.'
];

class inicioMain extends Component {
  constructor(props) {
    super(props);
  }

  componentWillMount() {}
  componentDidMount() {
    this.props._cmdgetEstado();
  }

  render() {
    const { mensaje, tipo } = this.props;
    return (
      <Fondo imagenes={[lander1, lander2, lander3]}>
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

inicioMain.propTypes = {
  _cmdgetEstado: PropTypes.func.isRequired,
  estaCargando: PropTypes.bool,
  _cmdinfoAlerta: PropTypes.func.isRequired,
  _cmdlimpioAlerta: PropTypes.func.isRequired,
  tipo: PropTypes.string,
  mensaje: PropTypes.string
};

export default inicioMain;
