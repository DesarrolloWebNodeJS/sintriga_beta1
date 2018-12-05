import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';

const footerEstilos = theme => ({
  pie: {
    padding: '2px',
    position: 'fixed',
    display: 'flex',
    justifyContent: 'flex-end',
    bottom: 0,
    width: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.63)'
  },
  aire: {
    padding: '0 7px 0 7px',
    color:
      theme.palette.type === 'light' ? '#f8f8f8' : theme.palette.primary.dark,
    letterSpacing: '0.5px',
    fontSize: '0.75rem',
    fontFamily: 'consolas'
  },
  link: {
    textDecoration: 'none',
    color: 'inherit'
  }
});

class Bot extends Component {
  render() {
    const { classes } = this.props;
    return (
      <footer className={classes.pie}>
        <Typography className={classes.aire}>
          <Link className={classes.link} to={'/'}>
            &copy; 2018 SINTRIGA
          </Link>
        </Typography>
        <Typography className={classes.aire}>
          <Link className={classes.link} to={'/terminos'}>
            Términos de uso
          </Link>
        </Typography>
        <Typography className={classes.aire}>
          <Link className={classes.link} to={'/privacidad'}>
            Privacidad
          </Link>
        </Typography>
      </footer>
    );
  }
}

Bot.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(footerEstilos)(Bot);
