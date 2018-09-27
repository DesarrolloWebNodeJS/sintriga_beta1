import React from 'react';
import { shallow } from 'enzyme';
import App from '../../App.sintriga';

describe('Rutas componente más alto en SINTRIGA', () => {
  let app = shallow(<App />);
  it('contiene las rutas', () => {
    expect(app.find('Route')).toHaveLength(1);
  });
});
