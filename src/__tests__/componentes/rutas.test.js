import React from 'react';
import { shallow } from 'enzyme';
import App from '../../contenedores/Rutas';

describe('Rutas en SINTRIGA', () => {
  let rutas = shallow(<App />);
  it('contiene las rutas publicas', () => {
    expect(rutas.find('Route')).toHaveLength(5);
  });
  it('contiene la ruta privada', () => {
    expect(rutas.find('Privado')).toHaveLength(1);
  });
});
