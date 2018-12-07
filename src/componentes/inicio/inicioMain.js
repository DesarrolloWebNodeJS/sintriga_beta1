import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Button from '@material-ui/core/Button';
// NOTA: Incluir el logo posteriormente
// import logo from './cloud.svg';
import Alerta from '../alerta';
import './inicioMain.css';
import Fondo from '../fondo';
import lander1 from '../../recursos/lander1.png';
import lander2 from '../../recursos/lander2.png';
import lander3 from '../../recursos/lander3.png';

class inicioMain extends Component {
  componentDidMount() {
    this.props._success('Conexión con el Servidor. OK.');
  }
  render() {
    const { mensaje } = this.props;
    return (
      <Fondo imagenes={[lander1, lander2, lander3]}>
        <Alerta mensaje={mensaje}/>
        <div className='inicioMain'>
          <header className='inicioHeader'>
            <p>
              Apasionados por la intriga, el crimen y la ciencia.
              <br />
              Disfruta de las <b>1250</b> series que tenemos a tu disposición.
              <br />
              Tenemos un grupo de WhatsApp para socializar.
            </p>
            <Button
              onClick={() => this.props.changePage()}
              style={{
                color: '#000',
                backgroundColor: '#FFC107',
                borderRadius: '20px',
                fontWeight: '600'
              }}
              variant='outlined'
              >
              todas las series de intriga aquí
            </Button>
            <a
              className='inicioLink'
              href='https://fb/sintriga'
              rel='noopener noreferrer'
              target='_blank'
              >
              Visitanos en Facebook
            </a>
          </header>
        </div>
      </Fondo>
    );
  }
}

inicioMain.propTypes = {
  _success: PropTypes.func.isRequired,
  mensaje: PropTypes.string,
  changePage: PropTypes.func.isRequired
};

export default inicioMain;
