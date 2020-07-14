import React, { Component } from 'react'
import { Grid, Tabs, Tab, Typography, InputBase, ClickAwayListener, Divider } from '@material-ui/core'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';



export default class SearchBar extends Component {
  constructor(props) {
    super(props)

    this.state = {
      value: 0,
      inputClicked: false,
    }
  }

  changeTab = (event, newValue) => {
    this.setState({ value: newValue });
  };

  render() {
    return (
      <div>
        <Tabs TabIndicatorProps={{ style: { background: 'black' } }} value={this.state.value} onChange={this.changeTab} aria-label="simple tabs example">
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Places to stay" />
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Experiences" />
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Online experiences" />
        </Tabs>
        <Grid container style={{ borderRadius: 10, border: '1px solid lightgrey', marginTop: 20 }} alignItems='center'>
          <ClickAwayListener onClickAway={() => this.setState({ inputClicked: false })}>
            <Grid item xs={5} onClick={() => this.setState({ inputClicked: true })} style={{
              padding: '5px 20px',
              border: this.state.inputClicked ? '2px solid darkgrey' : '2px solid transparent',
              borderRadius: this.state.inputClicked ? 10 : 0,
              backgroundColor: this.state.inputClicked ? '#ededed' : 'transparent'
            }}>
              <Typography variant='caption' style={{ fontWeight: 700 }}>LOCATION</Typography>
              <InputBase
                onChange={(e) => {
                  this.setState({ search: e.target.value });
                }}
                onKeyPress={this.handleKeyPress}
                style={{ width: '90%', padding: '0px !important' }}
                inputProps={{ placeholder: 'Where are you going?', type: 'text' }}
              />
              {this.state.inputClicked ? <CloseOutlinedIcon fontSize='small' /> : null}
            </Grid>
          </ClickAwayListener>
          {this.state.inputClicked ? null : <Divider orientation='vertical' style={{ height: 70 }} />}
          <Grid item xs={2}>
            <Typography variant='caption' style={{ fontWeight: 700 }}>CHEK IN</Typography>
          </Grid>
          {this.state.inputClicked ? null : <Divider orientation='vertical' style={{ height: 70 }} />}
          <Grid item xs={2}>
            <Typography variant='caption' style={{ fontWeight: 700 }}>CHECK OUT</Typography>
          </Grid>
          {this.state.inputClicked ? null : <Divider orientation='vertical' style={{ height: 70 }} />}
          <Grid item xs={2}>
            <Typography variant='caption' style={{ fontWeight: 700 }}>GUESTS</Typography>
          </Grid>
        </Grid>
      </div>
    )
  }
}
