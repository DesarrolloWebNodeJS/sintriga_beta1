import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link, Route } from 'react-router-dom';
import { push } from 'connected-react-router';
import Test from './contenedores/Test';
import { bindActionCreators } from 'redux';

const Index = () => <h2>Home</h2>;
const About = () => <h2>About</h2>;
const Users = () => <h2>Users</h2>;
const Shopping = () => <p>Shopping</p>;
const Announce = () => <p>Announce</p>;

class App extends Component {
  constructor(props) {
    super(props);
  }

  goTo(route) {
    this.props.changePage(route);
  }

  render() {
    return (
      <div>
        <ul>
          <li>
            <Link to='/'> Annonces </Link>{' '}
          </li>
          <li>
            <Link to='/shopping'> Shopping </Link>
          </li>
          <li>
            <Link to='/index'> Index </Link>
          </li>
          <li>
            <Link to='/about'> About </Link>
          </li>
          <li>
            <Link to='/users'> Users </Link>
          </li>
          <li>
            <Link to='/tests'> Login </Link>
          </li>
        </ul>

        <div>
          <button onClick={() => this.goTo('/shopping')}>
            Click here to go shopping ! (if you can...)
          </button>
        </div>

        <div style={{ padding: '150px' }}>
          <Route component={Announce} exact path='/' />
          <Route component={Shopping} path='/shopping' />
          <Route component={Index} exact path='/index' />
          <Route component={About} path='/about' />
          <Route component={Users} path='/users' />
          <Route component={Test} path='/tests' />
        </div>
      </div>
    );
  }
}
App.propTypes = {
  changePage: PropTypes.func.isRequired
};

const mapStateToProps = store => ({
  location: store.router.location
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      changePage: (url) => push(url)
    },
    dispatch
  );


export default connect(mapStateToProps, mapDispatchToProps)(App);
