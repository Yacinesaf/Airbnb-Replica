import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';


function HouseInfo({ img }) {
  const grade = () => {
    return Math.floor(Math.random() * (5 - 4)) + 4
  }
  const commentsNumber = () => {
    return Math.floor(Math.random() * 100)
  }

  return (
    <Grid container>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={4} style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', width : '100%', height : 300 }}>
          </Grid>
          <Grid item xs={8} style={{display : 'flex', flexDirection : 'column', justifyContent : 'space-between'}}>
            <Typography>Entire house in Osaka</Typography>
            <Typography>Osaka</Typography>
            <div style={{ border: '1px solid grey', width: 15, margin: '10px 0px' }} />
            <Typography>6 guests 2 bedrroms 3beds 1.5 baths</Typography>
            <Typography>Hot tub Wifi Kitchen</Typography>
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <StarIcon style={{ color: '#FF385C', paddingRight : 5 }} />
              <Typography style={{fontWeight : 600}}>{grade()}</Typography>
              <Typography>{`(${commentsNumber()})`}</Typography>
            </div>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HouseInfo;