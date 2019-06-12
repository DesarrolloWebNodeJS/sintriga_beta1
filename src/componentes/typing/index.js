import React from 'react';
import PropTypes from 'prop-types';
import Typist from 'react-typist';

const Escribiendo = ({ mensajes }) => {
  return (
    <div style={{ color: '#FFC107', fontFamily: 'Gabriola', minWidth: '450px'}}>
      <Typist cursor={{ show: false }}>
        <span>Apasionados por la intriga,</span>
        <Typist.Backspace count={11} delay={2000} />
        <span>el crimen</span>
        <Typist.Backspace count={0} delay={2000} />
        <span> y la ciencia.</span>
      </Typist>
      <Typist cursor={{ show: false }}>
        <p> {mensajes[0]}</p>
      </Typist>
      <Typist cursor={{ show: false }}>
        <p> {mensajes[1]}</p>
      </Typist>
    </div>
  );
};

Escribiendo.propTypes = {
  mensajes: PropTypes.array.isRequired
};

export default Escribiendo;
