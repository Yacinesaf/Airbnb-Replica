import React, { Component } from 'react'
import { Grid, InputBase, CircularProgress, Dialog, DialogActions, Typography, Slide, DialogContent } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import { getLocations } from '../services/apiEndpoints'
import RoomIcon from '@material-ui/icons/Room';
import { connect } from 'react-redux'
import { setCity, getCoordinates } from '../reduxStore/actions.js'


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

class SearchbarMobile extends Component {
  constructor(props) {
    super(props)
    this.state = {
      inputClicked: false,
      isDialogOpen: false,
      options: [],
      loading: false,
      inputValue: '',
    }
  }

  openDialog = () => {
    this.setState({ isDialogOpen: true });
  }

  closeDialog = () => {
    this.setState({ isDialogOpen: false });
  }
  render() {
    return (
      <Grid container justify='center'>
        <Grid item xs={10} style={{ padding: '20px 0px' }}>
          <div style={{ padding: '5px 20px', alignItems: 'center', display: 'flex', backgroundColor: 'white', borderRadius: 25, boxShadow: '0 2px 4px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.13)' }}>
            <SearchIcon style={{ color: 'black', paddingRight: 5 }} />
            <InputBase
              onClick={this.openDialog}
              value={this.state.inputValue}
              style={{ padding: '0px !important' }}
              label="Asynchronous"
              inputProps={{
                placeholder: 'Where are you going?',
                type: 'text',
                readOnly: true
              }}
            />
          </div>
        </Grid>
        <Dialog fullScreen open={this.state.isDialogOpen} onClose={this.closeDialog} TransitionComponent={Transition}>
          <DialogActions>
            <Grid container justify='center' alignItems='center'>
              <Grid item xs={11} style={{ padding: '20px 0px' }}>
                <Grid container justify='center' alignItems='center'>
                  <Grid item xs={9}>
                    <div style={{ padding: '5px 20px', alignItems: 'center', display: 'flex', backgroundColor: 'white', borderRadius: 25, boxShadow: '0 2px 4px rgba(0,0,0,0.06), 0 2px 4px rgba(0,0,0,0.13)' }}>
                      <SearchIcon style={{ color: 'black', paddingRight: 5 }} />
                      <InputBase
                        onClick={this.openDialog}
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
                        endAdornment={this.state.loading ? <CircularProgress size='30' variant="indeterminate" /> : null}
                        value={this.state.inputValue}
                        style={{ padding: '0px !important' }}
                        label="Asynchronous"
                        inputProps={{
                          placeholder: 'Where are you going?',
                          type: 'text'
                        }}
                      />
                    </div>
                  </Grid>
                  <Grid onClick={this.closeDialog} item xs={3} style={{ padding: '0px 20px' }}>
                    <Typography style={{ fontWeight: 600, color: 'grey' }}>Cancel</Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </DialogActions>
          <DialogContent>
            {this.state.options.length ? this.state.options.map((x, i) => (
              <div onClick={(e) => {
                this.setState({ inputValue: e.currentTarget.innerText, options: [], isDialogOpen: false });
                this.props.setCity(e.currentTarget.innerText, x.center);
                this.props.history.push('/searchResults');
                this.setState({inputValue : ''})
              }} key={i} style={{ display: 'flex', alignItems: 'center', color: 'grey' }}>
                <RoomIcon fontSize='large' color='inherit' style={{ paddingRight: 20 }} />
                <p>{x.place_name}</p>
              </div>
            )) :
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <div style={{ backgroundColor: 'lightgrey', borderRadius: 8, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: "7px 10px" }}>
                  <RoomIcon fontSize='small' style={{ color: '#424242' }} />
                </div>
                <Typography style={{ paddingLeft: 10 }}>Nearby</Typography>
              </div>
            }
          </DialogContent>
        </Dialog>
      </Grid>
    )
  }
}

const mapStateToProps = state => ({

})

export default connect(mapStateToProps, { setCity, getCoordinates })(SearchbarMobile)