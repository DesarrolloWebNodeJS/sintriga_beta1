import React from 'react';
import NoencontradoImagen from '../../recursos/404.png';
import lander1 from '../../recursos/lander1.png';
import lander2 from '../../recursos/lander2.png';
import lander3 from '../../recursos/lander3.png';
import Fondo from '../fondo';
import Alerta from '../alerta';

const Noencontrado = () => {
  return (
    <Fondo imagenes={[NoencontradoImagen, lander1, lander2, lander3 ]}>
      <Alerta mensaje='Error 404' tipo='warning' />
    </Fondo>
  );
};

export default Noencontrado;
