import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import { Grid, Typography, Chip, Divider } from '@material-ui/core';
import { connect } from 'react-redux'
import { getResultsPhotos, } from '../reduxStore/actions'
import HouseInfo from './HouseInfo';
import MapOutlinedIcon from '@material-ui/icons/MapOutlined';
import SearchIcon from '@material-ui/icons/Search';



class SearchResultsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 135.5023,
      long: 34.6937,
      zoom: 11,
      showMap: false,
    };
  }
  componentDidMount() {
    if (this.state.showMap) {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/light-v10',
        center: this.props.cityCoordinates ? [this.props.cityCoordinates[0], this.props.cityCoordinates[1]] : [this.state.lat, this.state.long],
        zoom: this.state.zoom,
        accessToken: 'pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrY3V1cDJoMTFzcTgzMm1mNHVmMXB5Y2cifQ.fftFTePNksxmgthYcL4LBw',
        compact: true
      });
      new mapboxgl.Marker()
        .setLngLat(this.props.cityCoordinates ? [this.props.cityCoordinates[0], this.props.cityCoordinates[1]] : [this.state.lat, this.state.long])
        .addTo(map);
    }

    this.props.getResultsPhotos()
  }

  createMap = () => {
    if (!this.state.showMap) {
      const map = new mapboxgl.Map({
        container: this.mapContainer,
        style: 'mapbox://styles/mapbox/light-v10',
        center: this.props.cityCoordinates ? [this.props.cityCoordinates[0], this.props.cityCoordinates[1]] : [this.state.lat, this.state.long],
        zoom: this.state.zoom,
        accessToken: 'pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrY3V1cDJoMTFzcTgzMm1mNHVmMXB5Y2cifQ.fftFTePNksxmgthYcL4LBw',
        compact: true
      });
      new mapboxgl.Marker()
        .setLngLat(this.props.cityCoordinates ? [this.props.cityCoordinates[0], this.props.cityCoordinates[1]] : [this.state.lat, this.state.long])
        .addTo(map);
      return (
        <Grid item xs={12} md={6} style={{ height: '100%' }}>
          <div style={{ height: '100vh', position: "absolute", right: 0 }} ref={el => this.mapContainer = el} />
        </Grid>
      )
    }
  }

  render() {
    return (
      <Grid container justify='center' style={{ minHeight: '100vh', paddingBottom: 56 }}>
        {this.state.showMap ?
          null
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
          <Grid item xs={12} md={6} style={{ height: 'calc(100vh - 76px)' }}>
            <div style={{ height: 'calc(100vh - 76px)', position: "fixed", right: 0, width: '50%', overflow: 'hidden' }} ref={el => this.mapContainer = el} />
          </Grid>
        }
        {this.props.smDown ?
          <div onClick={() => { this.setState({ showMap: !this.state.showMap }); this.createMap() }} style={{ position: 'fixed', bottom: 100 }}>
            <div style={{ padding: '10px 16px', backgroundColor: 'rgb(34, 34, 34)', display: 'flex', justifyContent: 'center', alignItems: 'center', width: 'fit-content', borderRadius: 25 }}>
              {this.state.showMap ? <SearchIcon style={{ color: 'white', paddingRight: 5 }} /> : <MapOutlinedIcon style={{ color: 'white', paddingRight: 5 }} />}
              <Typography style={{ color: 'white', fontWeight: 600 }}>{this.state.showMap ? 'Results' : 'Map'}</Typography>
            </div>
          </div>
          : null}
      </Grid>
    )
  }
}

const mapStateToProps = state => ({
  photos: state.resultsPhotos.resultsPhotos,
  fetching: state.resultsPhotos.fetchingResultsPhotos,
  cityName: state.adressesCoordinates.cityName,
  coordinates: state.adressesCoordinates.coordinates,
  cityCoordinates: state.adressesCoordinates.cityCenter
})

export default connect(mapStateToProps, { getResultsPhotos })(SearchResultsMap)