import axios from 'axios';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reductores';

const defaultOptions = {
  baseURL: 'http://192.168.100.95:5000',
  headers: {
    'Content-Type': 'application/json'
  }
};
const axiosInstance = axios.create(defaultOptions);
axiosInstance.interceptors.request.use(function(config) {
  // const token = store.getState().session.token;
  const token = localStorage.getItem('token');
  config.headers.Authorization = token ? `${token}` : '';
  return config;
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
