import React from 'react';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import CircularProgress from '@material-ui/core/CircularProgress';

const styles = theme => ({
  progress: {
    margin: theme.spacing.unit * 5
  }
});

const CircularIndeterminate = (props) => {
  return (
    <Grid
      alignItems='center'
      className={props.root}
      container
      justify='center'
      >
      <Grid item md={2} sm={3} xs={4}>
        <CircularProgress className={props.progress} size={50} />
      </Grid>
    </Grid>
  );
};

CircularIndeterminate.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(CircularIndeterminate);
