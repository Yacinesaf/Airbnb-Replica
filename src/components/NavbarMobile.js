import React, { Component } from 'react';
import { BottomNavigation, BottomNavigationAction, AppBar } from '@material-ui/core';
import AccountCircleOutlinedIcon from '@material-ui/icons/AccountCircleOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import logo from '../assets/logoGrey.png'



class NavbarMobile extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0
    }
  }

  render() {
    return (
      <AppBar position='fixed' style={{ top: "auto", bottom: 0 }}>
        <BottomNavigation
          value={this.state.value}
          onChange={(event, newValue) => {
            this.setState({ value: newValue })
          }}
          showLabels
        >
          <BottomNavigationAction label="Explore" icon={<img src={logo} alt='logo' style={{height : 20, width : 20, paddingBottom : 7, paddingTop : 2}} />} />
          <BottomNavigationAction label="Saved" icon={<FavoriteBorderOutlinedIcon style={{height : 24, width : 24, paddingBottom : 5}} />} />
          <BottomNavigationAction label="Log in" icon={<AccountCircleOutlinedIcon style={{height : 24, width : 24, paddingBottom : 5}} />} />
        </BottomNavigation>
      </AppBar>
    );
  }
}

export default NavbarMobile;