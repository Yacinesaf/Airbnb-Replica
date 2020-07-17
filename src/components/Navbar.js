import React, { Component } from 'react'
import { AppBar, Typography, Button, Grid, Menu, MenuItem, Divider } from '@material-ui/core'
import logoText from '../assets/logoText.png'
import LanguageIcon from '@material-ui/icons/Language';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import MenuIcon from '@material-ui/icons/Menu';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import '../style.css'
import { withStyles } from '@material-ui/core/styles';
import SearchBar from './SearchBar';



class Navbar extends Component {
  constructor() {
    super()
    this.state = {
      anchorEl1: null,
      anchorEl2: null,
    }
  }

  render() {
    return (
      <AppBar color='transparent' position="sticky" style={{ boxShadow: 'none' }}>
        <Grid container justify='center'>
          <Grid item xs={10}>
            <Grid container justify='space-between' style={{ padding: '30px 0px' }} alignItems='center'>
              <Grid item xs={2}>
                <img src={logoText} alt='logo' height={32} />
              </Grid>
              <Grid item xs={2} style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end', cursor: 'pointer' }}>
                <div onClick={(e) => this.setState({ anchorEl1: e.currentTarget })} style={{ display: 'flex', alignItems: 'center', paddingRight: 10 }}>
                  <LanguageIcon style={{ color: '#484848' }} />
                  <ArrowDropDownIcon style={{ color: '#484848' }} />
                </div>
                <div onClick={(e) => this.setState({ anchorEl2: e.currentTarget })} className='menuHover' style={{ display: 'flex', alignItems: 'center', border: '0.2px solid lightgrey', padding: 5, borderRadius: 30, cursor: 'pointer' }}>
                  <MenuIcon style={{ padding: 5, color: '#484848' }} />
                  <AccountCircleIcon fontSize='large' style={{ color: '#484848' }} />
                </div>
              </Grid>
            </Grid>
            <SearchBar />
          </Grid>
        </Grid>
        <Menu
          anchorEl={this.state.anchorEl1}
          keepMounted
          open={Boolean(this.state.anchorEl1)}
          onClose={() => { this.setState({ anchorEl1: null }) }}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          elevation={4}
          MenuListProps={{
            style: {
              padding: 10
            }
          }}
        >
          <MenuItem onClick={() => this.setState({ anchorEl1: null })} style={{ display: 'flex', alignItems: 'center' }}>
            <LanguageIcon fontSize='small' style={{ color: '#484848', paddingRight: 5 }} />
            <Typography variant='subtitle2' style={{ fontWeight: 600 }}>English (CA)</Typography>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ anchorEl1: null })}>
            <Typography variant='subtitle2' style={{ fontWeight: 600, paddingLeft: 5 }}>$</Typography>
            <Typography variant='subtitle2' style={{ fontWeight: 600, paddingLeft: 10 }}>CAD</Typography>
          </MenuItem>
        </Menu>
        <Menu
          anchorEl={this.state.anchorEl2}
          keepMounted
          open={Boolean(this.state.anchorEl2)}
          onClose={() => { this.setState({ anchorEl2: null }) }}
          getContentAnchorEl={null}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          elevation={4}
          MenuListProps={{
            style: {
              padding: 10
            }
          }}
        >
          <MenuItem onClick={() => this.setState({ anchorEl2: null })} style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='subtitle2' style={{ fontWeight: 600 }}>Sign up</Typography>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ anchorEl2: null })}>
            <Typography variant='subtitle2'>Log in</Typography>
          </MenuItem>
          <Divider />
          <MenuItem onClick={() => this.setState({ anchorEl2: null })} style={{ display: 'flex', alignItems: 'center' }}>
            <Typography variant='subtitle2'>Host your home</Typography>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ anchorEl2: null })}>
            <Typography variant='subtitle2'>Host an experience</Typography>
          </MenuItem>
          <MenuItem onClick={() => this.setState({ anchorEl2: null })}>
            <Typography variant='subtitle2'>Help</Typography>
          </MenuItem>
        </Menu>
      </AppBar>
    )
  }
}


export default Navbar;
