import React from 'react';
import { Route } from 'react-router'
import Navbar from './components/Navbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavbarMobile from './components/NavbarMobile';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import CategoriesDisplay from './components/CategoriesDisplay';
import OnlineExperience from './components/OnlineExperience';
import SearchBar from './components/SearchBar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Other from './components/Other';
import Footer from './components/Footer';
import SearchResultsMap from './components/SearchResultsMap.js'


const themee = createMuiTheme({
  palette: {
    primary: {
      main: '#FF385C'
    }
  },
});




function Routes() {
  const scrolledDown = useScrollTrigger({ threshold: 50, disableHysteresis: true });
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <MuiThemeProvider theme={themee}>
      {smDown ? <NavbarMobile /> : <Navbar scrolledDown={scrolledDown} />}
      {/*      
      <div style={{ marginBottom: smDown ? 56 : 0 }}>
        {smDown ? null : <SearchBar />}
        <CategoriesDisplay smDown={smDown} />
        <OnlineExperience smDown={smDown} />
        <Other />
  <Footer />*/}
      <SearchResultsMap smDown={smDown} />
    </MuiThemeProvider>
  );
}

export default Routes;
