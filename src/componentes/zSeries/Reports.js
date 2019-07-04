import React, { Component } from 'react';
import { connect } from 'react-redux';

class Orders extends Component {
  render() {
    return (
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem, velit iste id similique, sint quidem nihil unde libero reiciendis corrupti tempora qui explicabo! Suscipit beatae nemo aliquid consectetur dolorum?</p>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

const mapDispatchToProps = {};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Orders);
