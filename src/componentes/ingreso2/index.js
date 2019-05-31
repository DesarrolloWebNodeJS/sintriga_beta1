import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './ingreso2.css';

class ingresoDos extends Component {
  render() {
    return (
      <form className='box' method='post'>
        <h2>iniciar sesión</h2>
        <input id='usuario' name='' placeholder='Usuario' type='text' />
        <input id='' name='contraseña' placeholder='Contraseña' type='password'/>
        <input type='submit' value='Ingresar'/>
      </form>
    );
  }
}

ingresoDos.propTypes = {
  classes: PropTypes.object.isRequired
};

export default ingresoDos;
