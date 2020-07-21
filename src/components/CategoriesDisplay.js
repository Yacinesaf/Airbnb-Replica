import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core'

export default class CategoriesDisplay extends Component {
  render() {
    return (
      <div>
        <Grid container justify='center'>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={6}>
                <Typography variant='h2' style={{color : '#FF385C', padding : '40px 0px'}}>
                  You don't need to go far to find what matters.
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify='center'>
            
            </Grid>
          </Grid>
        </Grid>

      </div>
    )
  }
}
