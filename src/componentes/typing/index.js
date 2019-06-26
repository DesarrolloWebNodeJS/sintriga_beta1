import React from 'react';
import PropTypes from 'prop-types';
import Typography from '@material-ui/core/Typography';
import Typist from 'react-typist';

const Escribiendo = ({ mensajes }) => {
  return (
    <div style={{fontFamily: 'Rubik'}}>
      <Typography style={{color: '#000', textAlign: 'center'}} variant='h4'>
      {'⭐'} Series Intriga {'⭐'}
      </Typography>
      <Typography color='secondary' gutterBottom style={{textAlign: 'center'}} variant='h6'>
      <b>INTRIGA</b>, <b>CRIMEN</b> y <b>CIENCIA</b>
      </Typography>

      <Typography color='secondary' style={{textAlign: 'center'}} variant='subtitle2'>
      <Typist cursor={{ show: false }}>
        <p><span aria-label='tv' role='img'>📺</span> {mensajes[0]}</p>
        <p><span aria-label='primer' role='img'>🥇</span> {mensajes[1]}</p>
        <p><span aria-label='listo' role='img'>✅</span> {mensajes[2]}</p>
      </Typist>
      </Typography>
    </div>
  );
};

Escribiendo.propTypes = {
  mensajes: PropTypes.array.isRequired
};

export default Escribiendo;
