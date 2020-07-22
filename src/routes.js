import React from 'react';
import { Route } from 'react-router'
import Navbar from './components/Navbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavbarMobile from './components/NavbarMobile';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CategoriesDisplay from './components/CategoriesDisplay';



const themee = createMuiTheme({
  palette: {
    primary: {
      main: '#FF385C'
    }
  },
});




function Routes() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiThemeProvider theme={themee}>
      <div>
        {smDown ? <NavbarMobile /> : <Navbar />}
        <CategoriesDisplay smDown={smDown} />
      </div>
    </MuiThemeProvider>
  );
}

export default Routes;
