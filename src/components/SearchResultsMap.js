import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import { Grid, Typography, Chip, Divider } from '@material-ui/core';


export default class SearchResultsMap extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lng: 5,
      lat: 34,
      zoom: 2
    };
  }
  componentDidMount() {
    const map = new mapboxgl.Map({
      container: this.mapContainer,
      style: 'mapbox://styles/mapbox/light-v10',
      center: [this.state.lng, this.state.lat],
      zoom: this.state.zoom,
      accessToken: 'pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrY3V1cDJoMTFzcTgzMm1mNHVmMXB5Y2cifQ.fftFTePNksxmgthYcL4LBw',
      compact: true
    });
  }

  render() {
    return (
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={6} style={{ padding: 30 }}>
          <Typography variant='subtitle2'>300+ stays</Typography>
          <Typography variant='h4' style={{ paddingBottom: 20, fontWeight: 600 }}>stays in {this.props.citySearch}</Typography>
          <div style={{ display: 'flex' }}>
            <Chip variant="outlined" label="Cancellation flexibility" />
            <Chip style={{ margin: '0px 10px' }} variant="outlined" label="Type of place" />
            <Chip style={{ margin: '0px 10px' }} variant="outlined" label="Price" />
            <Chip style={{ margin: '0px 10px' }} variant="outlined" label="Instant book" />
            <Chip variant="outlined" label="More filters" />
          </div>
          <Typography variant='subtitle2' style={{ margin: '20px 0px' }}>Enter dates and number of guests to see the total price per night.</Typography>
          <Divider variant='fullWidth' style={{ marginBottom: 20 }} />
          <Typography variant='subtitle2' style={{ fontWeight : 600 }}>More than 35,000 guests have stayed in Mont-Tremblant On average they rated their stays 4.8 out of 5 stars.</Typography>
        </Grid>
        <Grid item xs={6} style={{ height: '100%' }}>
          <div style={{ height: '100vh' }} ref={el => this.mapContainer = el} />
        </Grid>
      </Grid>
    )
  }
}
