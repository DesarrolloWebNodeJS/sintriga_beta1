import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

const Escribiendo = ({ mensajes }) => {
  return (
    <Typist cursor={{ show: false }}>
      <span>Apasionados por la intriga,</span>
      <Typist.Backspace count={11} delay={2000} />
      <span>el crimen</span>
      <Typist.Backspace count={0} delay={2000} />
      <span> y la ciencia.</span>
      <p> {mensajes[0]}</p>
      <p> {mensajes[1]}</p>
    </Typist>
  );
};

Escribiendo.propTypes = {
  mensajes: PropTypes.array.isRequired
};

export default Escribiendo;
