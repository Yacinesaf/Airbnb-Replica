import React from 'react';
import { Route } from 'react-router'
import Navbar from './components/Navbar';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import NavbarMobile from './components/NavbarMobile';



function App() {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));


  return (
    <div>
      {smDown ? <NavbarMobile /> : <Navbar />}
    </div>
  );
}

export default App;
