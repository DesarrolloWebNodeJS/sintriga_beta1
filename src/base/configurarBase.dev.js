import axios from 'axios';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import logg from 'redux-logger';
import rootReducer from './reductores';
import { routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const configurarBase = preloadedState => {
  const axiosInstance = axios.create({
    baseURL: 'http://localhost:2326/'
  });

  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const middleware = [
    thunk.withExtraArgument(axiosInstance),
    routerMiddleware(history),
    logg
  ];
  const store = createStore(
    rootReducer(history),
    preloadedState,
    composeEnhancers(applyMiddleware(...middleware))
  );
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reductores', () => {
      store.replaceReducer(rootReducer);
    });
  }
  return store;
};

export default configurarBase;
