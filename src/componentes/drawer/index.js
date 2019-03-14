import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { withStyles } from '@material-ui/core/styles';
import Superior from '../zSuperior';
import Series from '../zSeries';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
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
    width: theme.spacing.unit * 7,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing.unit * 9
    }
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto'
  },
  fondoDrawer: {
    backgroundColor: 'rgba(0, 0, 0, 0.63)'
  },
  bordeDerecho: {
    borderRight: '0.5px solid #ffc107'
  },
  colorDivider: {
    borderBottom: '0.5px solid #ffc107'
  },
  colorDrawer: {
    color: '#ffc107'
  },
  // NOTA: las siguientes dos clases son para el chart y una tabla
  chartContainer: {
    marginLeft: -22
  },
  tableContainer: {
    height: 320
  }
});

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.handleDrawerOpen = this.handleDrawerOpen.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
  }

  handleDrawerOpen() {
    this.setState({ open: true });
  }

  handleDrawerClose() {
    this.setState({ open: false });
  }

  render() {
    const { classes } = this.props;

    return (
      <React.Fragment>
        <div className={classes.root}>
          <Superior
            abierto={this.state.open}
            propEstilo={{
              background: 'rgba(0, 0, 0, 0.63)',
              borderBottom: '0.5px solid #ffc107'
            }}
            propPosicion='fixed'
            propTitulo='Catálogo de Series'
          />
          <Drawer
            classes={{
              paper: classNames(
                classes.drawerPaper,
                !this.state.open && classes.drawerPaperClose,
                classes.fondoDrawer
              ),
              paperAnchorDockedLeft: classes.bordeDerecho
            }}
            open={this.state.open}
            variant='permanent'
            >
            <div className={classes.toolbarIcon}>
              <IconButton
                className={classes.colorDrawer}
                disabled={!this.state.open}
                onClick={this.handleDrawerClose}
                >
                <ChevronLeftIcon />
              </IconButton>
            </div>
            <Divider className={classes.divider} />
            <List>
              <div>
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <DashboardIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Panel de Control'
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
                    primary='Favoritos'
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
                    primary='Lista series'
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
              </div>
            </List>
            <Divider className={classes.divider} />
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
                <ListItem button>
                  <ListItemIcon className={classes.colorDrawer}>
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    classes={{
                      primary: classes.colorDrawer
                    }}
                    primary='Year-end sale'
                  />
                </ListItem>
              </div>
            </List>
          </Drawer>
          <main className={classes.content}>
            <div className={classes.appBarSpacer} />
            <Typography gutterBottom variant='display2'>
              Orders
            </Typography>
            <Series />
          </main>
        </div>
      </React.Fragment>
    );
  }
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Dashboard);
