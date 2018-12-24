import React from 'react';
import { push } from 'connected-react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';

const index = props => {
  return (
    <div>
      <h1>Login</h1>
      <button
        onClick={() => {
          props.push('/');
        }}
        type='button'
        >
        Click Me!
      </button>
    </div>
  );
};

index.propTypes = {
  push: PropTypes.func
};

export default connect(
  null,
  { push }
)(index);
