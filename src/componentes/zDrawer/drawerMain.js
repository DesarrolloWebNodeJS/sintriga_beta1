import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Superior from '../zSuperior';
import Series from '../zSeries';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import AssignmentIcon from '@material-ui/icons/Assignment';
// import { Link } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    display: 'flex'
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    borderBottom: '0.5px solid #ffc107'
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    }),
    width: theme.spacing() * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing() * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    paddingTop: '50px',
    flexGrow: 1,
    overflow: 'auto',
    height: '90vh'
  },
  fondoDrawer: {
    backgroundColor: 'rgba(0, 0, 0, 0.80)'
  },
  bordeDerecho: {
    borderRight: '0.5px solid #ffc107',
    height: '100vh'
  },
  colorDivider: {
    borderBottom: '0.5px solid #ffc107'
  },
  colorDrawer: {
    color: '#ffc107'
  }
});

class drawerMain extends Component {

  handlearPDF() {
    return (
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ea unde officiis iure, sed natus, nam optio laborum suscipit quia a temporibus! Praesentium rerum eum atque, ipsum similique dolorem quas dolor?</p>
    );
  }

  render() {
    const { classes, abiertoDrawer, _cmdmostrarDrawer } = this.props;
    return (
      <React.Fragment>
        <div className={classes.root}>
          <Superior
            propBuscador={true}
            propEstilo={{
              borderBottom: '0.5px solid #ffc107'
            }}
            propmostrarDrawer={true}
            propTitulo=''
          />
          <Drawer
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !abiertoDrawer && classes.drawerPaperClose,
                classes.fondoDrawer
              ),
              paperAnchorDockedLeft: classes.bordeDerecho
            }}
            open={abiertoDrawer}
            variant='temporary'
            >
            <div className={classes.toolbarIcon}>
              <IconButton
                className={classes.colorDrawer}
                disabled={!abiertoDrawer}
                onClick={_cmdmostrarDrawer}
                >
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <List>
                <ListItem
                  button
                  onClick={this.handlearPDF}
                  >
                  <ListItemIcon className={classes.colorDrawer}>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Favoritos'
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Recientes'
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Investigaciones'
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <ShoppingCartIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Estadistica'
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <PeopleIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Chat'
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <BarChartIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Reportes'
                  />
                </ListItem>
            </List>
            <Divider className={classes.colorDivider} />
            <List>
              <div>
                <ListSubheader className={classes.colorDrawer} inset>
                  Saved reports
                </ListSubheader>
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Current month'
                  />
                </ListItem>
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Last quarter'
                  />
                </ListItem>
              </div>
            </List>
          </Drawer>
          <main className={classes.content}>
            <Series />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

drawerMain.propTypes = {
  classes: PropTypes.object.isRequired,
  abiertoDrawer: PropTypes.bool.isRequired,
  _cmdmostrarDrawer: PropTypes.func.isRequired
};

export default withStyles(styles)(drawerMain);
