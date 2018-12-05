import reductores from '../../reductores';

test('Reductores', () => {
  let state;
  state = reductores(
    {
      rutas: { location: null },
      opciones: {
        mostrarListaClientes: false,
        servicioCorreos: true,
        paletteType: 'light'
      },
      errores: {}
    },
    {
      type: '@@router/LOCATION_CHANGE',
      payload: { pathname: '/series', search: '', hash: '', key: 'jvzv0l' }
    }
  );
  expect(state).toEqual({
    rutas: {
      location: { pathname: '/series', search: '', hash: '', key: 'jvzv0l' }
    },
    opciones: {
      mostrarListaClientes: false,
      servicioCorreos: true,
      paletteType: 'light'
    },
    errores: {}
  });
});
