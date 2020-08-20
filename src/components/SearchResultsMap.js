import React, { Component } from 'react'
import ReactMapGL, { Marker } from 'react-map-gl'
import { Grid, Typography, Chip, Divider } from '@material-ui/core';
import { connect } from 'react-redux'
import { getResultsPhotos, } from '../reduxStore/actions'
import HouseInfo from './HouseInfo';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import SearchIcon from '@material-ui/icons/Search';
import RoomIcon from '@material-ui/icons/Room';


class SearchResultsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      viewport: {
        height: this.props.smDown ? '100vh' : 'calc(100vh - 76px)',
        width: this.props.smDown ? '100%' : '50%',
        longitude: this.props.cityCoordinates ? this.props.cityCoordinates[0] : 135.5023,
        latitude: this.props.cityCoordinates ? this.props.cityCoordinates[1] : 34.6937,
        zoom: 9,
        compact: true
      },
      showMap: false,
      coordinates: null,
    };
  }
  componentDidMount() {
    if (this.props.cityCoordinates) {
      this.setState({ coordinates: this.generateCoordinates(this.props.cityCoordinates, 5) });
      this.props.getResultsPhotos()
    } else {
      this.props.history.push('/')
    }
  }

  getRandomNum(max) {
    var num = Math.random() * max;
    num *= Math.random() * 2 >= 1 ? 1 : -1;
    return num
  }

  generateCoordinates(center, n) {
    return [...Array(n).keys()].map(x => {
      let p1 = this.getRandomNum(0.5) / 100
      let p2 = this.getRandomNum(0.5) / 100
      return [center[0] * (1 + p1), center[1] * (1 + p2)]
    })
  }

  render() {
    console.log(this.props.cityCoordinates);
    return (
      <div>
        {this.props.cityCoordinates ?
          <Grid container justify='center' style={{ minHeight: '100vh', paddingBottom: 56 }}>
            {this.state.showMap ?
              <Grid item xs={12} md={6} >
                <ReactMapGL style={{ position: 'fixed' }} mapboxApiAccessToken='pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrY3V1cDJoMTFzcTgzMm1mNHVmMXB5Y2cifQ.fftFTePNksxmgthYcL4LBw' {...this.state.viewport} onViewportChange={(viewport) => this.setState({ viewport })}>
                  {this.state.coordinates.map((x, i) => (
                    <Marker key={i} latitude={x[1]} longitude={x[0]}>
                      <RoomIcon fontSize='large' color='primary' />
                    </Marker>
                  ))}
                </ReactMapGL>
              </Grid>
              :
              <Grid item xs={12} md={6} style={{ padding: 30 }}>
                <Typography variant='subtitle2'>300+ stays</Typography>
                <Typography variant='h4' style={{ paddingBottom: 20, fontWeight: 600, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 700 }}>Stays in {this.props.cityName}</Typography>
                {this.props.smDown ?
                  <Chip style={{ padding: '0px 10px' }} variant="outlined" label="filters" />
                  :
                  <div style={{ display: 'flex' }}>
                    <Chip variant="outlined" label="Cancellation flexibility" />
                    <Chip style={{ margin: '0px 10px' }} variant="outlined" label="Type of place" />
                    <Chip style={{ margin: '0px 10px' }} variant="outlined" label="Price" />
                    <Chip style={{ margin: '0px 10px' }} variant="outlined" label="Instant book" />
                    <Chip variant="outlined" label="More filters" />
                  </div>
                }
                <Typography variant='subtitle2' style={{ margin: '20px 0px' }}>Enter dates and number of guests to see the total price per night.</Typography>
                <Divider variant='fullWidth' style={{ marginBottom: 20 }} />
                <Typography variant='subtitle2' style={{ fontWeight: 600 }}>More than 35,000 guests have stayed in Mont-Tremblant On average they rated their stays 4.8 out of 5 stars.</Typography>
                <div style={{ paddingTop: 30 }}>
                  {this.props.fetching ? null :
                    this.props.photos.map((x, i) => (
                      <HouseInfo key={i} img={x.urls.raw} />
                    ))
                  }
                </div>
              </Grid>
            }
            {this.props.smDown ? null :
              <Grid item xs={12} md={6} >
                <ReactMapGL style={{ position: 'fixed', right: 0 }} mapboxApiAccessToken='pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrY3V1cDJoMTFzcTgzMm1mNHVmMXB5Y2cifQ.fftFTePNksxmgthYcL4LBw' {...this.state.viewport} onViewportChange={(viewport) => this.setState({ viewport })}>
                  {this.state.coordinates ? this.state.coordinates.map((x, i) => (
                    <Marker key={i} latitude={x[1]} longitude={x[0]}>
                      <RoomIcon fontSize='large' color='primary' />
                    </Marker>
                  )) : null}
                </ReactMapGL>
              </Grid>
            }
            {this.props.smDown ?
              <div onClick={() => { this.setState({ showMap: !this.state.showMap }) }} style={{ position: 'fixed', bottom: 100 }}>
                <div style={{ padding: '10px 16px', backgroundColor: 'rgb(34, 34, 34)', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content', borderRadius: 25 }}>
                  {this.state.showMap ? <SearchIcon style={{ color: 'white', paddingRight: 5 }} /> : <MapOutlinedIcon style={{ color: 'white', paddingRight: 5 }} />}
                  <Typography style={{ color: 'white', fontWeight: 600 }}>{this.state.showMap ? 'Results' : 'Map'}</Typography>
                </div>
              </div>
              : null}
          </Grid>
          : this.props.history.push('/')}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.resultsPhotos.resultsPhotos,
  fetching: state.resultsPhotos.fetchingResultsPhotos,
  cityName: state.searchedCityInfo.cityName,
  cityCoordinates: state.searchedCityInfo.cityCenter
})

export default connect(mapStateToProps, { getResultsPhotos })(SearchResultsMap)