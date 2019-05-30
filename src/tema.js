import React from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

import common from '@material-ui/core/colors/common';
import yellow from '@material-ui/core/colors/amber';
// import Top from './top';
// import Bot from './bot';
// import CssBaseline from '@material-ui/core/CssBaseline';

const theme = createMuiTheme({
  palette: {
    primary: {
      light: common['black'],
      main: common['black'],
      dark: common['black']
    },
    secondary: {
      light: yellow[300],
      main: yellow[500],
      dark: yellow[700]
    }
  },
  typography: {
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      'Sitka Small',
      'Consolas',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"'
    ].join(',')
  }
});

function importar(Component) {
  function conPlantilla(props) {
    return (
      <MuiThemeProvider theme={theme}>
        <Component {...props} />
      </MuiThemeProvider>
    );
  }
  return conPlantilla;
}

importar.propTypes = {
  pageContext: PropTypes.object
};

export default importar;
