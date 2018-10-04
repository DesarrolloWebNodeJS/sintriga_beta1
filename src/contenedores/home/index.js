import React from 'react';
import { push } from 'react-router-redux';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
  increment,
  incrementAsync,
  decrement,
  decrementAsync
} from '../../reductores/counter';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
// import Plantilla from '../../_plantilla/index';

const Home = props => (
  <div>
    <Helmet>
      <title>SIntriga</title>
    </Helmet>
    <p>Contador: {props.count}</p>
    <p>
      <button disabled={props.isIncrementing} onClick={props.increment} >
        Increment
      </button>
      <button disabled={props.isIncrementing} onClick={props.incrementAsync} >
        Increment Async
      </button>
    </p>

    <p>
      <button disabled={props.isDecrementing} onClick={props.decrement} >
        Decrement
      </button>
      <button disabled={props.isDecrementing} onClick={props.decrementAsync} >
        Decrement Async
      </button>
    </p>

    <p>
      <button onClick={() => props.changePage()}>
        Go to about page via redux
      </button>
    </p>
  </div>
);

Home.propTypes = {
  isIncrementing: PropTypes.bool.isRequired,
  isDecrementing: PropTypes.bool.isRequired,
  count: PropTypes.number.isRequired,
  increment: PropTypes.func.isRequired,
  decrement: PropTypes.func.isRequired,
  incrementAsync: PropTypes.func.isRequired,
  decrementAsync: PropTypes.func.isRequired,
  changePage: PropTypes.func.isRequired
};

const mapStateToProps = state => ({
  count: state.contador.incrementadorI,
  isIncrementing: state.contador.isIncrementing,
  isDecrementing: state.contador.isDecrementing
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      increment,
      incrementAsync,
      decrement,
      decrementAsync,
      changePage: () => push('/nosotros')
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
