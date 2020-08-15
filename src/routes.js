import React from 'react';
import { Route } from 'react-router'
import Navbar from './components/Navbar';
import NavbarMobile from './components/NavbarMobile';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import SearchResultsMap from './components/SearchResultsMap.js'
import LandingPage from './components/LandingPage';
import { useLocation, useHistory } from "react-router-dom";


const themee = createMuiTheme({
  palette: {
    primary: {
      main: '#FF385C'
    }
  },
});




function Routes() {
  const location = useLocation();
  const history = useHistory();
  const scrolledDown = useScrollTrigger({ threshold: 50, disableHysteresis: true });
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiThemeProvider theme={themee}>
      {smDown ? <NavbarMobile history={history} /> : <Navbar history={history} scrolledDown={scrolledDown} location={location} />}
      <Route exact path='/' component={LandingPage} />
      <Route exact path='/searchResults' render={(props) => <SearchResultsMap {...props} smDown={smDown} />} />
    </MuiThemeProvider>
  );
}

export default Routes;
