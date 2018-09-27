import reducers from '../../reductores';

test('reducers', () => {
  let state;
  state = reducers(
    {
      router: { location: null },
      counter: { count: 0, isIncrementing: false, isDecrementing: false }
    },
    {
      type: '@@router/LOCATION_CHANGE',
      payload: { pathname: '/home', search: '', hash: '' }
    }
  );
  expect(state).toEqual({
    router: { location: { pathname: '/home', search: '', hash: '' } },
    counter: { count: 0, isIncrementing: false, isDecrementing: false }
  });
});
