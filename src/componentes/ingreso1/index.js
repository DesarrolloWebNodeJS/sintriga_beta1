import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing() * 2,
    paddingBottom: theme.spacing() * 2,
    position: 'absolute',
    width: '400px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%,-50%)',
    textAlign: 'center',
    display: 'flex',
    flexDirection: 'column',
    border: '0.5px solid #ffc107'
  },
  formControl: {
    margin: theme.spacing()
  },
  formControl2: {
    margin: theme.spacing() * 3
  }
});

function PaperSheet(props) {
  const { classes } = props;

  return (
    <div>
      <Paper className={classes.root} elevation={1}>
        <Typography component='h3' variant='headline'>
          Iniciar Sesión
        </Typography>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='name-simple'>
            Nombre de usuario / Email
          </InputLabel>
          <Input color='secondary' id='name-simple' />
        </FormControl>
        <FormControl className={classes.formControl}>
          <InputLabel htmlFor='pass'>Contraseña</InputLabel>
          <Input id='pass' />
        </FormControl>
        <FormControl className={classes.formControl2}>
          <Button color='secondary' variant='contained'>Ingresar</Button>
        </FormControl>
      </Paper>
    </div>
  );
}

PaperSheet.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(PaperSheet);
