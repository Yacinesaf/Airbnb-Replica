import React from 'react';
import { Grid, Typography, Button } from '@material-ui/core';

function Other(props) {
  const destinations = [
    'San Francisco',
    'Los Angeles',
    'New York',
    'Seattle',
    'Denver',
    'Washington DC',
    'Phoenix',
    'Austin',
    'Houston',
    'New Orleans',
    'Boston',
    'Miami']

  return (
    <Grid container justify='center' style={{ padding: '60px 10px' }}>
      <Grid item xs={10}>
        <Grid container justify='space-between'>
          <Grid item xs={6}>
            <div style={{ maxWidth: 460 }}>
              <Typography style={{ fontWeight: 700, fontSize: '1.75rem' }}>Host a hero:help house frontline responders around the world</Typography>
              <Button variant='outlined' color='inherit' style={{ color: 'black', marginTop: 15, textTransform: 'none', borderRadius: 10 }}>
                Get involved
              </Button>
            </div>
          </Grid>
          <Grid item xs={6}>
            <div style={{ maxWidth: 460, paddingLeft: 18 }}>
              <Typography>
                With front line stays, Airbnb is partnering with our hosts to connect 100,000 healthcare providers,
                relief workers, and first responders with places to stay that allow them to be close to their patients and safely
                distanced from their own families.
              </Typography>
            </div>
          </Grid>
          <Grid item xs={12} style={{ padding: '100px 0px' }}>
            <div style={{ position: 'relative' }}>
              <div style={{
                backgroundImage: `url(https://images.unsplash.com/photo-1480796927426-f609979314bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80)`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                width: '100%',
                height: 415,
                borderRadius: 15,
                filter: 'brightness(0.7)',
              }} />
              <div style={{ position: 'absolute', left: 40, bottom: 40, maxWidth: 360 }}>
                <Typography variant='h4' style={{ color: 'white', fontWeight : 700 }}>Visit Japan Now #Japan</Typography>
                <Typography variant='h6' style={{ padding: '10px 0px', color: 'white' }}>Japan is known for it's traditions and stunning nature</Typography>
                <Typography variant='h6' style={{ color: 'white' }}>Learn more...</Typography>
              </div>
            </div>
          </Grid>
          <Grid item xs={12}>
            <Typography variant='h4' style={{ padding: '20px 0px' }}>Destinations for future trips</Typography>
            <Grid container>
              {destinations.map((x, i) => (
                <Grid item key={i} xs={3} style={{ padding: '10px 0px', borderBottom: '1px solid grey' }}>
                  <Typography style={{marginRight : 10}}>{x}</Typography>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid >
  );
}

export default Other;