import React, { Component } from 'react'
import { Grid, Tabs, Tab, Typography, InputBase, ClickAwayListener, Divider } from '@material-ui/core'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SearchIcon from '@material-ui/icons/Search';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      inputClicked: false,
      checkinClicked: false,
      checkoutClicked: false,
      guestsClicked: false,
      selectedDate: new Date()
    }
  }

  changeTab = (event, newValue) => {
    this.setState({ value: newValue });
  };

  changeDate = (date) => {
    this.setState({ selectedDate: date });
  }

  render() {
    return (
      <div>
        <Tabs TabIndicatorProps={{ style: { background: 'black' } }} value={this.state.value} onChange={this.changeTab} aria-label="simple tabs example">
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Places to stay" />
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Experiences" />
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Online experiences" />
        </Tabs>
        <Grid container alignItems='center' style={{ borderRadius: 10, border: '1px solid lightgrey', marginTop: 20, padding: '3px 10px' }}>
          <ClickAwayListener onClickAway={() => this.setState({ inputClicked: false })}>
            <Grid item xs={4} onClick={() => this.setState({ inputClicked: true })} style={{
              border: this.state.inputClicked ? '2px solid darkgrey' : '2px solid transparent',
              borderRadius: this.state.inputClicked ? 10 : 0,
              backgroundColor: this.state.inputClicked ? '#ededed' : 'transparent',
              display: 'flex',
              alignItems: 'center'
            }}>
              <div style={{ flexGrow: 1 }}>
                <Typography variant='caption' style={{ fontWeight: 700 }}>LOCATION</Typography>
                <InputBase
                  onChange={(e) => {
                    this.setState({ search: e.target.value });
                  }}
                  onKeyPress={this.handleKeyPress}
                  style={{ width: '90%', padding: '0px !important' }}
                  inputProps={{ placeholder: 'Where are you going?', type: 'text' }}
                />
              </div>
              {this.state.inputClicked ? <CloseOutlinedIcon fontSize='small' /> : null}
            </Grid>
          </ClickAwayListener>
          {this.state.inputClicked ? null : <Divider orientation='vertical' style={{ height: 70 }} />}
          <ClickAwayListener onClickAway={() => this.setState({ checkinClicked: false })}>
            <Grid item xs={2} onClick={() => this.setState({ checkinClicked: true })} style={{
              border: this.state.checkinClicked ? '2px solid darkgrey' : '2px solid transparent',
              borderRadius: this.state.checkinClicked ? 10 : 0,
              backgroundColor: this.state.checkinClicked ? '#ededed' : 'transparent',
              paddingLeft: 10
            }}>
              <Typography variant='caption' style={{ fontWeight: 700 }}>CHEK IN</Typography>
              <Typography style={{ fontWeight: 300, color: 'lightgrey', fontSize: 12, paddingTop: 5 }}>Add dates</Typography>
            </Grid>
          </ClickAwayListener>
          {this.state.checkinClicked ? null : <Divider orientation='vertical' style={{ height: 70 }} />}
          <ClickAwayListener onClickAway={() => this.setState({ checkoutClicked: false })}>
            <Grid item xs={2} onClick={() => this.setState({ checkoutClicked: true })} style={{
              border: this.state.checkoutClicked ? '2px solid darkgrey' : '2px solid transparent',
              borderRadius: this.state.checkoutClicked ? 10 : 0,
              backgroundColor: this.state.checkoutClicked ? '#ededed' : 'transparent',
              paddingLeft: 10
            }}>
              <Typography variant='caption' style={{ fontWeight: 700 }}>CHEK OUT</Typography>
              <Typography style={{ fontWeight: 300, color: 'lightgrey', fontSize: 12, paddingTop: 5 }}>Add dates</Typography>
            </Grid>
          </ClickAwayListener>
          {this.state.checkoutClicked ? null : <Divider orientation='vertical' style={{ height: 70 }} />}
          <ClickAwayListener onClickAway={() => this.setState({ guestsClicked: false })}>
            <Grid item xs={3} onClick={() => this.setState({ guestsClicked: true })} style={{
              border: this.state.guestsClicked ? '2px solid darkgrey' : '2px solid transparent',
              paddingLeft: 10,
              borderRadius: this.state.guestsClicked ? 10 : 0,
              backgroundColor: this.state.guestsClicked ? '#ededed' : 'transparent',
              display: 'flex',
              flexGrow: 1
            }}>
              <div>
                <Typography variant='caption' style={{ fontWeight: 700 }}>CHEK OUT</Typography>
                <Typography style={{ fontWeight: 300, color: 'lightgrey', fontSize: 12, paddingTop: 5 }}>Add guests</Typography>
              </div>
            </Grid>
          </ClickAwayListener>
          <div style={{ borderRadius: 5, backgroundColor: '#FF385C', color: 'white', textTransform: 'none', fontSize: 16, display: 'flex', alignItems: 'center', cursor: 'pointer', height: 'fit-content', padding: '13px 20px' }}>
            <SearchIcon fontSize='small' style={{ color: 'white', paddingRight: 5 }} />
          Search
        </div>
        </Grid>
      </div>
    )
  }
}
