import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import logo from '../../recursos/logo.jpg';

const useStyles = makeStyles({
  bigAvatar: {
    margin: 10,
    width: 200,
    height: 200
  }
});

export default function ImageAvatars() {
  const classes = useStyles();
  return (
    <div>
      <Avatar
        alt='Series de Intriga'
        classes={{ root: classes.bigAvatar }}
        className='bounce-in-top'
        src={logo}
      />
    </div>
  );
}

ImageAvatars.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string
};
