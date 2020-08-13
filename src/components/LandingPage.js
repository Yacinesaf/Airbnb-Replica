import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import CategoriesDisplay from './CategoriesDisplay'
import OnlineExperience from './OnlineExperience';
import SearchBar from './SearchBar';
import Other from './Other';
import Footer from './Footer';
import { useHistory } from "react-router-dom";


function LandingPage(props) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const history = useHistory();


  return (
    <div style={{ marginBottom: smDown ? 56 : 0 }}>
      {smDown ? null : <SearchBar history={history}  />}
      <CategoriesDisplay smDown={smDown} />
      <OnlineExperience smDown={smDown} />
      <Other />
      <Footer />
    </div>
  );
}

export default LandingPage;