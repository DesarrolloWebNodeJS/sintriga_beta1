import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reductores';
import { routerMiddleware } from 'connected-react-router';
import createHistory from 'history/createBrowserHistory';

export const history = createHistory();

const axiosInstance = axios.create({
  baseURL: 'http://localhost:5500/api'
});

const middleware = [
  thunk.withExtraArgument(axiosInstance),
  routerMiddleware(history)
];

const configurarBase = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(...middleware)
);

export default configurarBase;
