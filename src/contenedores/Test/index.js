import React, { Component } from 'react';
import { Helmet } from 'react-helmet';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { _cmdgetSeries, _cmdmostrarNuevo, _cmdpostSeries } from '../../base/acciones/series.Acciones';
import tema from '../../tema';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Alerta from '../../componentes/alerta';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import lander1 from '../../recursos/lander1.jpg';

const styles = {
  root: {
    flexGrow: 1
  },
  flex: {
    flexGrow: 1
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

function mapStateToProps(state) {
  return {
    tipo: state.alerta.tipo,
    mensaje: state.alerta.mensaje,
    catSeries: state.series.catSeries
  };
}
const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      _cmdgetSeries,
      _cmdmostrarNuevo,
      _cmdpostSeries
    },
    dispatch
  );

class PruebaPagina extends Component {
  componentDidMount() {
    this.props._cmdgetSeries();
  }
  render() {
    const { classes, mensaje, tipo, catSeries } = this.props;
    return (
      <div>
        <Helmet>
          <title>Test | SINTRIGA</title>
        </Helmet>
        <div>
          <Alerta mensaje={mensaje} tipo={tipo} />
        </div>
        <div>
          <GridList className={classes.gridList} cols={4} spacing={2}>
            {catSeries.map(tile => (
              <GridListTile
                key={tile.id}
                >
                <img alt={tile.titulo} src={lander1} />
                <GridListTileBar
                  actionIcon={
                    <IconButton color='secondary'>
                      <StarBorderIcon />
                    </IconButton>
                  }
                  actionPosition='left'
                  classes={{
                    title: classes.title,
                    root: classes.titleBar
                  }}
                  title={tile.titulo}
                  titlePosition='top'
                />
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}
PruebaPagina.propTypes = {
  classes: PropTypes.object.isRequired,
  tipo: PropTypes.string.isRequired,
  mensaje: PropTypes.string.isRequired,
  catSeries: PropTypes.array.isRequired,
  _cmdgetSeries: PropTypes.func.isRequired
};

export default tema(withStyles(styles)(connect(mapStateToProps, mapDispatchToProps)(PruebaPagina)));
