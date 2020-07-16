import React, { Component } from 'react'
import { Grid, Tabs, Tab, Typography, InputBase, Divider } from '@material-ui/core'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SearchIcon from '@material-ui/icons/Search';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      inputClicked: false,
      checkinDate: null,
      checkoutDate: null,

    }
  }

  changeTab = (event, newValue) => {
    this.setState({ value: newValue });
  };

  checkinDate = () => {
    this.refs.checkin.openDialog()
  }



  render() {
    return (
      <div>
        <Tabs TabIndicatorProps={{ style: { background: 'black' } }} value={this.state.value} onChange={this.changeTab} aria-label="simple tabs example">
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Places to stay" />
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Experiences" />
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Online experiences" />
        </Tabs>
        <Grid container alignItems='center' style={{ borderRadius: 10, border: '1px solid lightgrey', marginTop: 20 }}>
          <Grid item xs={4} onClick={() => this.setState({ inputClicked: true })} style={{ display: 'flex', alignItems: 'center', padding: '0px 10px', height: '100%' }}>
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
          <Divider orientation='vertical' style={{ height: 70 }} />
          <Grid item xs={2} style={{ paddingLeft: 10 }}>
            <Typography variant='caption' style={{ fontWeight: 700 }}>CHEK IN</Typography>
            <Typography style={{ fontWeight: 300, color: 'lightgrey', fontSize: 12, paddingTop: 5 }}>{this.state.checkinDate ? this.state.checkinDate : 'Add dates'}</Typography>
          </Grid>
          <Divider orientation='vertical' style={{ height: 70 }} />
          <Grid item xs={2} style={{ paddingLeft: 10 }}>
            <Typography variant='caption' style={{ fontWeight: 700 }}>CHEK OUT</Typography>
            <Typography style={{ fontWeight: 300, color: 'lightgrey', fontSize: 12, paddingTop: 5 }}>{this.state.checkoutDate ? this.state.checkoutDate : 'Add dates'}</Typography>
          </Grid>
          <Divider orientation='vertical' style={{ height: 70 }} />
          <Grid item xs={3} style={{ paddingLeft: 10, display: 'flex', flexGrow: 1 }}>
            <div>
              <Typography variant='caption' style={{ fontWeight: 700 }}>CHEK OUT</Typography>
              <Typography style={{ fontWeight: 300, color: 'lightgrey', fontSize: 12, paddingTop: 5 }}>Add guests</Typography>
            </div>
          </Grid>
          <div style={{ borderRadius: 5, backgroundColor: '#FF385C', color: 'white', textTransform: 'none', fontSize: 14, display: 'flex', alignItems: 'center', cursor: 'pointer', height: 'fit-content', padding: '10px 20px', justifyContent: 'center' }}>
            <SearchIcon fontSize='small' style={{ color: 'white', paddingRight: 5 }} />
          Search
        </div>
        </Grid>
        <MuiPickersUtilsProvider ref='checkin' utils={DateFnsUtils}>
          <KeyboardDatePicker
            margin="normal"
            id="date-picker-dialog"
            label="Date picker dialog"
            format="MM/dd/yyyy"
            onChange={(e) => this.setState({ checkinDate: `${e.getDate()}/${e.getMonth() + 1}/${e.getFullYear()}` })}
            KeyboardButtonProps={{
              'aria-label': 'change date',
            }}
          />
        </MuiPickersUtilsProvider>
      </div>
    )
  }
}
