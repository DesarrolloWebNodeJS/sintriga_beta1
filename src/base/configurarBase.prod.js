import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reductores';

const axiosInstance = axios.create({
  baseURL: 'http://192.168.100.95:5000'
});

const middleware = [
  thunk.withExtraArgument(axiosInstance)
];

const configurarBase = preloadedState => createStore(
  rootReducer,
  preloadedState,
  applyMiddleware(...middleware)
);

export default configurarBase;
