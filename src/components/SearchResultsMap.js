import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl';
import { Grid } from '@material-ui/core';


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
      accessToken : 'pk.eyJ1IjoidHN1c2hpIiwiYSI6ImNrY3V1cDJoMTFzcTgzMm1mNHVmMXB5Y2cifQ.fftFTePNksxmgthYcL4LBw',
      compact : true
    });
  }

  render() {
    return (
      <Grid container style={{ minHeight: '100vh' }}>
        <Grid item xs={6}>
        <div></div>
        </Grid>
        <Grid item xs={6} style={{ height: '100%' }}>
          <div style={{ height: '100vh' }} ref={el => this.mapContainer = el} />
        </Grid>
      </Grid>
    )
  }
}
