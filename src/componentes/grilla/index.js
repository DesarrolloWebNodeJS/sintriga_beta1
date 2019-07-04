import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import IconButton from '@material-ui/core/IconButton';
import StarRateIcon from '@material-ui/icons/StarRate';
import StarBorderIcon from '@material-ui/icons/StarBorder';
import lander1 from '../../recursos/lander1.jpg';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.dark
  },
  gridList: {
    width: '100%',
    // Promote the list into his own layer on Chrome. This cost memory but helps keeping high FPS.
    transform: 'translateZ(0)'
  },
  titleBar: {
    background:
      'linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, ' +
      'rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)'
  },
  icon: {
    color: '#f44336'
  },
  title: {
    color: theme.palette.secondary.main
  }
});

function AdvancedGridList(props) {
  const { classes, tileData } = props;
  return (
    <div className={classes.root}>
      <GridList className={classes.gridList} cols={4} spacing={2}>
        {tileData.map(tile => (
          <GridListTile key={tile.id}>
            <img alt={tile.titulo} src={lander1} />
            <GridListTileBar
              actionIcon={
                <IconButton className={classes.icon}>
                  {tile.favorito ? <StarRateIcon /> : <StarBorderIcon />}
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
  );
}

AdvancedGridList.propTypes = {
  classes: PropTypes.object.isRequired,
  tileData: PropTypes.array.isRequired
};

export default withStyles(styles)(AdvancedGridList);
