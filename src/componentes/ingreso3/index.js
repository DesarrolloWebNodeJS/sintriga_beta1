import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

const styles = theme => ({
  layout: {
    width: 'auto',
    display: 'block',
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    [theme.breakpoints.up(400 + theme.spacing(3) * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto'
    }
  },
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing(2)}px ${theme.spacing(3)}px ${theme.spacing(3)}px`
  },
  avatar: {
    margin: theme.spacing(),
    backgroundColor: theme.palette.secondary.main
  },
  form: {
    width: '100%',
    marginTop: theme.spacing()
  },
  submit: {
    marginTop: theme.spacing(3)
  }
});

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.cmdAceptar = this.cmdAceptar.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  cmdAceptar(e) {
    e.preventDefault();
    let datos = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.cmdSistemaIngresar(datos);
    this.setState = {
      email: '',
      password: ''
    };
  }

  render() {
    const { classes } = this.props;
    return (
      <React.Fragment>
        <main className={classes.layout}>
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockIcon />
            </Avatar>
            <Typography variant='h4'>Iniciar Sesión</Typography>
            <form className={classes.form}>
              <FormControl fullWidth margin='normal' required>
                <InputLabel htmlFor='email'>Correo Electrónico</InputLabel>
                <Input autoComplete='email' id='email' name='email' onChange={e => this.handleChange(e)}/>
              </FormControl>
              <FormControl fullWidth margin='normal' required>
                <InputLabel htmlFor='password'>Contraseña</InputLabel>
                <Input
                  autoComplete='current-password'
                  id='password'
                  name='password'
                  onChange={e => this.handleChange(e)}
                  type='password'
                />
              </FormControl>
              <Button
                className={classes.submit}
                color='secondary'
                fullWidth
                onClick={this.cmdAceptar}
                type='submit'
                variant='contained'
                >
                Ingresar
              </Button>
            </form>
          </Paper>
        </main>
      </React.Fragment>
    );
  }
}

SignIn.propTypes = {
  classes: PropTypes.object.isRequired,
  cmdSistemaIngresar: PropTypes.func.isRequired
};

export default withStyles(styles)(SignIn);
