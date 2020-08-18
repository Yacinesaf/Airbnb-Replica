import React, { Component } from 'react'
import { Grid, Tabs, Tab, Typography, InputBase, Divider, Dialog, IconButton, Button, CircularProgress, ClickAwayListener, Snackbar } from '@material-ui/core'
import CloseOutlinedIcon from '@material-ui/icons/CloseOutlined';
import SearchIcon from '@material-ui/icons/Search';
import DateFnsUtils from '@date-io/date-fns';
import {
  KeyboardDatePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import RemoveCircleOutlineIcon from '@material-ui/icons/RemoveCircleOutline';
import { getLocations } from '../services/apiEndpoints'
import { setCity } from '../reduxStore/actions.js'
import RoomIcon from '@material-ui/icons/Room';
import { connect } from 'react-redux'
import MuiAlert from '@material-ui/lab/Alert';

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

class SearchBar extends Component {
  constructor(props) {
    super(props)
    this.state = {
      tabValue: 0,
      inputClicked: false,
      checkinDate: new Date(),
      checkoutDate: new Date(),
      isDialogOpen: false,
      adultsNum: 0,
      childrenNum: 0,
      infantsNum: 0,
      guestsAddition: null,
      options: [],
      loading: false,
      inputValue: '',
      showSnackbar: false,
      cityCoordinates: null
    }
  }

  changeTab = (event, newValue) => {
    this.setState({ tabValue: newValue });
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

  isFormValid = () => {
    if (this.state.tabValue === 1) {
      if (this.state.inputValue && this.state.checkinDate) {
        return true
      } else {
        return false
      }
    } else {
      if (this.state.inputValue && this.state.guestsAddition > 0 && this.state.checkoutDate && this.state.checkinDate) {
        return true
      } else {
        return false
      }
    }


  }



  render() {
    return (
      <Grid container justify='center'>
        <Grid item xs={10} style={{ padding: '0px 10px' }}>
          <Tabs TabIndicatorProps={{ style: { background: 'black' } }} value={this.state.tabValue} onChange={this.changeTab} aria-label="simple tabs example">
            <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Places to stay" />
            <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Experiences" />
            <Tab style={{ textTransform: 'none', minWidth: 'initial' }} label="Online experiences" />
          </Tabs>
          <Grid container alignItems='center' style={{ borderRadius: 10, border: '1px solid lightgrey', marginTop: 20, padding: '0px 10px' }}>
            <ClickAwayListener onClickAway={() => { this.setState({ inputClicked: false, options: [] }) }}>
              <Grid item xs={this.state.tabValue === 1 ? 5 : 4} onClick={() => this.setState({ inputClicked: true })} style={{ position: 'relative', display: 'flex', alignItems: 'center', height: 70 }}>
                <div style={{ flexGrow: 1 }}>
                  <Typography variant='caption' style={{ fontWeight: 700 }}>LOCATION</Typography>
                  <div>
                    <InputBase
                      onChange={(e) => {
                        this.setState({ inputValue: e.target.value })
                        if (e.target.value.length) {
                          this.setState({ loading: true })
                          getLocations(e.target.value).then(res => {
                            this.setState({ loading: false })
                            this.setState({ options: res })
                          }).catch(() => {
                            this.setState({ options: [] })
                          })
                        } else {
                          this.setState({ options: [] })
                        }
                      }}
                      endAdornment={this.state.loading ? <CircularProgress size={30} variant="indeterminate" /> : null}
                      value={this.state.inputValue}
                      style={{ width: '90%', padding: '0px !important' }}
                      label="Asynchronous"
                      inputProps={{
                        placeholder: 'Where are you going?',
                        type: 'text'
                      }}
                    />
                    <div style={{ position: 'absolute', borderRadius: 10, backgroundColor: 'white', boxShadow: ' 0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', width: '-webkit-fill-available', padding: this.state.options.length ? '10px 20px' : 0, marginLeft: -10, marginTop: 10 }}>
                      {this.state.options ? this.state.options.map((x, i) => (
                        <div onClick={(e) => { this.setState({ inputValue: e.currentTarget.innerText, options: [], cityCoordinates: x.center }) }} key={i} style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
                          <RoomIcon fontSize='large' color='inherit' style={{ paddingRight: 20 }} />
                          <p>{x.place_name}</p>
                        </div>
                      )) : null}
                    </div>
                  </div>
                </div>
                {this.state.inputClicked && this.state.inputValue.length ? <CloseOutlinedIcon onClick={() => { this.setState({ options: [], inputValue: '' }) }} style={{ cursor: 'pointer', paddingRight: 15 }} fontSize='small' /> : null}
              </Grid>
            </ClickAwayListener>
            <Grid item xs={this.state.tabValue === 1 ? 6 : 2} style={{ paddingLeft: 10, height: 70, alignItems: 'center', display: 'flex' }}>
              <Divider orientation='vertical' style={{ height: 70 }} />
              <MuiPickersUtilsProvider utils={DateFnsUtils}>
                <KeyboardDatePicker
                  style={{ margin: 0, paddingLeft: 10 }}
                  margin="normal"
                  InputProps={{ disableUnderline: true, readOnly: true }}
                  id="check in date picker"
                  label={this.state.tabValue === 1 ? 'DATE' : "CHECK IN"}
                  InputLabelProps={{
                    style: { fontWeight: 600, color: 'black', paddingLeft: 10 }
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
            {this.state.tabValue === 1 ? null :
              <Grid item xs={2} style={{ paddingLeft: 10, height: 70, alignItems: 'center', display: 'flex' }}>
                <Divider orientation='vertical' style={{ height: 70 }} />
                <MuiPickersUtilsProvider utils={DateFnsUtils}>
                  <KeyboardDatePicker
                    style={{ margin: 0, paddingLeft: 10 }}
                    margin="normal"
                    InputProps={{ disableUnderline: true, readOnly: true }}
                    id="check out date picker"
                    label="CHECK OUT"
                    InputLabelProps={{
                      style: { fontWeight: 600, color: 'black', paddingLeft: 10 }
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
            }
            {this.state.tabValue === 1 ? null :
              <Grid onClick={this.openDialog} item xs={3} style={{ paddingLeft: 10, flexGrow: 1, height: 70, display: 'flex' }}>
                <Divider orientation='vertical' style={{ height: 70 }} />
                <div style={{ paddingTop: 7, paddingLeft: 10 }}>
                  <Typography variant='caption' style={{ fontWeight: 700 }}>GUESTS</Typography>
                  <Typography style={{ fontWeight: this.state.guestsAddition ? 600 : 300, color: this.state.guestsAddition ? 'black' : 'grey', fontSize: this.state.guestsAddition ? 16 : 14, paddingTop: 5 }}>{this.state.guestsAddition ? this.state.guestsAddition : 'Add guests'}</Typography>
                </div>
              </Grid>
            }
            <Grid item xs={1}>
              <div onClick={() => {
                if (this.isFormValid()) {
                  this.props.setCity(this.state.inputValue, this.state.cityCoordinates);
                  this.props.history.push('/searchResults');
                } else {
                  this.setState({ showSnackbar: true })
                }
              }}
                style={{ borderRadius: 5, backgroundColor: !this.isFormValid() ? 'lightgrey' : '#FF385C', color: 'white', textTransform: 'none', fontSize: 14, display: 'flex', alignItems: 'center', cursor: !this.isFormValid() ? 'unset' : 'pointer', height: 'fit-content', padding: '10px 18px', justifyContent: 'center' }}>
                <SearchIcon fontSize='small' style={{ color: 'white', paddingRight: 5 }} />
                <Typography>
                  Search
                </Typography>
              </div>
            </Grid>
          </Grid>
          <Dialog onBackdropClick={() => { this.resetGuests(); this.closeDialog() }} onEscapeKeyDown={() => { this.resetGuests(); this.closeDialog() }} open={this.state.isDialogOpen} onClose={this.closeDialog}>
            <Grid container justify='center' alignItems='center' style={{ maxWidth: 310 }}>
              <Grid xs={12} item style={{ minHeight: 100, backgroundColor: '#FF385C' }} >
                <Typography variant='h4' style={{ color: 'white', paddingLeft: 24, paddingTop: 40 }}>Guests</Typography>
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
                <Button variant='text' onClick={() => { this.resetGuests(); this.closeDialog() }} style={{ padding: 0, textTransform: 'none' }}>Cancel</Button>
                <Button variant='text' onClick={() => { this.guestsAddition(); this.closeDialog() }} style={{ color: '#FF385C', fontWeight: 600, padding: 0, textTransform: 'none' }}>Submit</Button>
              </Grid>
            </Grid>
          </Dialog>
          {this.state.showSnackbar ?
            <Snackbar anchorOrigin={{ vertical: 'top', horizontal: 'center' }} open={this.state.showSnackbar} autoHideDuration={3000} onClose={() => { this.setState({ showSnackbar: false }) }}>
              <Alert onClose={() => { this.setState({ showSnackbar: false }) }} severity="error">
                Please fill out the required fields
            </Alert>
            </Snackbar> : null}

        </Grid>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { setCity })(SearchBar)