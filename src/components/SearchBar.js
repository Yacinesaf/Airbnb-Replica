import React, { Component } from 'react'
import { Grid, Tabs, Tab, Typography, InputBase, Divider, Dialog, IconButton } from '@material-ui/core'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SearchIcon from '@material-ui/icons/Search';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';


export default class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      value: 0,
      inputClicked: false,
      checkinDate: new Date(),
      checkoutDate: new Date(),
      isDialogOpen: false,
      adultsNum: 0,
      childrenNum: 0,
      infantsNum: 0,
      guestsAddition: null,
    }
  }

  changeTab = (event, newValue) => {
    this.setState({ value: newValue });
  };

  checkinDateChange = (date) => {
    this.setState({ checkinDate: date })
  };

  checkoutDateChange = (date) => {
    this.setState({ checkoutDate: date })
  };

  openDialog = () => {
    this.setState({ isDialogOpen: true });
  }

  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  }

  addAdults = () => {
    this.setState({ adultsNum: this.state.adultsNum + 1 });
  }
  addChildren = () => {
    this.setState({ childrenNum: this.state.childrenNum + 1 });
  }
  addInfants = () => {
    this.setState({ infantsNum: this.state.infantsNum + 1 });
  }
  removeAdults = () => {
    this.setState({ adultsNum: this.state.adultsNum - 1 });
  }
  removeChildren = () => {
    this.setState({ childrenNum: this.state.childrenNum - 1 });
  }
  removeInfants = () => {
    this.setState({ infantsNum: this.state.infantsNum - 1 });
  }

  guestsAddition = () => {
    this.setState({ guestsAddition: this.state.adultsNum + this.state.childrenNum + this.state.infantsNum });
  }

  resetGuests = () => {
    this.setState({
      adultsNum: 0,
      childrenNum: 0,
      infantsNum: 0,
      guestsAddition: null
    });
  }




  render() {
    return (
      <div>
        <Tabs TabIndicatorProps={{ style: { background: 'black' } }} value={this.state.value} onChange={this.changeTab} aria-label="simple tabs example">
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Places to stay" />
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Experiences" />
          <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Online experiences" />
        </Tabs>
        <Grid container alignItems='center' style={{ borderRadius: 10, border: '1px solid lightgrey', marginTop: 20, }}>
          <Grid item xs={4} onClick={() => this.setState({ inputClicked: true })} style={{ display: 'flex', alignItems: 'center', padding: '0px 15px', height: 70 }}>
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
          <Grid item xs={2} style={{ paddingLeft: 10, height: 70, alignItems: 'center', display: 'flex' }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{ margin: 0 }}
                margin="normal"
                InputProps={{ disableUnderline: true, readOnly: true }}
                id="check in date picker"
                label="CHECK IN"
                InputLabelProps={{
                  style: { fontWeight: 600, color: 'black' }
                }}
                format="dd/MM/yyyy"
                value={this.state.checkinDate}
                onChange={this.checkinDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Divider orientation='vertical' style={{ height: 70 }} />
          <Grid item xs={2} style={{ paddingLeft: 10, height: 70, alignItems: 'center', display: 'flex' }}>
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                style={{ margin: 0 }}
                margin="normal"
                InputProps={{ disableUnderline: true, readOnly: true }}
                id="check out date picker"
                label="CHECK OUT"
                InputLabelProps={{
                  style: { fontWeight: 600, color: 'black' }
                }}
                format="dd/MM/yyyy"
                value={this.state.checkoutDate}
                onChange={this.checkoutDateChange}
                KeyboardButtonProps={{
                  'aria-label': 'change date',
                }}
              />
            </MuiPickersUtilsProvider>
          </Grid>
          <Divider orientation='vertical' style={{ height: 70 }} />
          <Grid onClick={this.openDialog} item xs={3} style={{ paddingLeft: 10, flexGrow: 1, height: 70, alignItems: 'center', display: 'flex' }}>
            <div>
              <Typography variant='caption' style={{ fontWeight: 700 }}>GUESTS</Typography>
              <Typography style={{ fontWeight: 300, color: 'lightgrey', fontSize: 12, paddingTop: 5 }}>{this.state.guestsAddition ? this.state.guestsAddition : 'Add guests'}</Typography>
              <Dialog onBackdropClick={() => { this.resetGuests(); this.closeDialog() }} onEscapeKeyDown={() => { this.resetGuests(); this.closeDialog() }} open={this.state.isDialogOpen} onClose={this.closeDialog}>
                <Grid container justify='center' alignItems='center' style={{ maxWidth: 310 }}>
                  <Grid xs={12} item style={{ minHeight: 100, backgroundColor: '#FF385C' }} >
                    <Typography variant='h4' style={{ color: 'white', paddingLeft: 30, paddingTop: 30 }}>Guests</Typography>
                  </Grid>
                  <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', padding: '10px 0px', justifyContent: 'space-between', marginTop: 10 }}>
                    <div>
                      <Typography>Adults</Typography>
                      <Typography variant='subtitle2' style={{ fontWeight: 400, color: 'grey' }}>Ages 13 or above</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={this.removeAdults} disabled={!this.state.adultsNum > 0} style={{ padding: 0 }}>
                        <RemoveCircleOutlineIcon fontSize='large' />
                      </IconButton>
                      <Typography style={{ padding: '0px 10px' }}>{this.state.adultsNum}</Typography>
                      <IconButton onClick={this.addAdults} style={{ padding: 0 }}>
                        <AddCircleOutlineIcon fontSize='large' />
                      </IconButton>
                    </div>
                  </Grid>
                  <Divider />
                  <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', padding: '10px 0px', justifyContent: 'space-between' }}>
                    <div>
                      <Typography>Children</Typography>
                      <Typography variant='subtitle2' style={{ fontWeight: 400, color: 'grey' }}>Ages 2-12</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={this.removeChildren} disabled={!this.state.childrenNum > 0} style={{ padding: 0 }}>
                        <RemoveCircleOutlineIcon fontSize='large' />
                      </IconButton>
                      <Typography style={{ padding: '0px 10px' }}>{this.state.childrenNum}</Typography>
                      <IconButton onClick={this.addChildren} style={{ padding: 0 }}>
                        <AddCircleOutlineIcon fontSize='large' />
                      </IconButton>
                    </div>
                  </Grid>
                  <Divider />
                  <Grid item xs={10} style={{ display: 'flex', alignItems: 'center', padding: '10px 0px', justifyContent: 'space-between' }}>
                    <div>
                      <Typography>Infants</Typography>
                      <Typography variant='subtitle2' style={{ fontWeight: 400, color: 'grey' }}>Under 2</Typography>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <IconButton onClick={this.removeInfants} disabled={!this.state.infantsNum > 0} style={{ padding: 0 }}>
                        <RemoveCircleOutlineIcon fontSize='large' />
                      </IconButton>
                      <Typography style={{ padding: '0px 10px' }}>{this.state.infantsNum}</Typography>
                      <IconButton onClick={this.addInfants} style={{ padding: 0 }}>
                        <AddCircleOutlineIcon fontSize='large' />
                      </IconButton>
                    </div>
                  </Grid>
                  <Grid item xs={10} style={{ display: 'flex', justifyContent: 'space-between', padding: '20px 0px', alignItems: 'center' }}>
                    <Typography onClick={() => { this.resetGuests(); this.closeDialog() }} style={{ cursor: 'pointer' }}>Cancel</Typography>
                    <Typography onClick={() => { this.guestsAddition(); this.closeDialog() }} style={{ color: '#FF385C', fontWeight: 600, cursor: 'pointer' }}>Submit</Typography>
                  </Grid>
                </Grid>
              </Dialog>
            </div>
          </Grid>
          <div style={{ borderRadius: 5, backgroundColor: '#FF385C', color: 'white', textTransform: 'none', fontSize: 14, display: 'flex', alignItems: 'center', cursor: 'pointer', height: 'fit-content', padding: '10px 20px', justifyContent: 'center' }}>
            <SearchIcon fontSize='small' style={{ color: 'white', paddingRight: 5 }} />
            <Typography>
              Search
            </Typography>
          </div>
        </Grid>
      </div>
    )
  }
}
