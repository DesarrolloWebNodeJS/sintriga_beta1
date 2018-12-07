import React from 'react';
import PropTypes from 'prop-types';
import Snackbar from '@material-ui/core/Snackbar';

class PositionedSnackbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: true
    };
  }

  render() {
    const { mensaje } = this.props;
    return (
      <div>
        <Snackbar
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right'
          }}
          autoHideDuration={3000}
          ContentProps={{
            'aria-describedby': 'message-id'
          }}
          message={<span id='message-id'>{mensaje}</span>}
          open={this.state.open}
        />
      </div>
    );
  }
}

PositionedSnackbar.propTypes = {
  mensaje: PropTypes.string
};

export default PositionedSnackbar;
