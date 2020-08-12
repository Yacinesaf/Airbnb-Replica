import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import StarIcon from '@material-ui/icons/Star';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function HouseInfo({ img }) {
  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const grade = () => {
    return (Math.random() * (5 - 4) + 4).toFixed(2)
  }
  const commentsNumber = () => {
    return Math.floor(Math.random() * 1000)
  }

  return (
    <Grid container style={{ padding: '10px 0px' }}>
      <Grid item xs={12}>
        <Grid container>
          <Grid item xs={12} md={4} style={{ backgroundImage: `url(${img})`, backgroundPosition: 'center', backgroundSize: 'cover', width: '100%', height: 200, borderRadius: 7 }}>
          </Grid>
          {smDown ?
            <div style={{paddingTop : 15}}>
              <div style={{ display: 'flex', alignItems: 'center', paddingBottom : 5}}>
                <StarIcon style={{ color: '#FF385C', paddingRight: 5 }} />
                <Typography style={{ fontWeight: 600 }}>{grade()}</Typography>
                <Typography>{`(${commentsNumber()})`}</Typography>
              </div>
              <Typography>Entire house in Osaka</Typography>
              <Typography>Osaka</Typography>
            </div>
            :
            <Grid item xs={8} style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', paddingLeft: 20 }}>
              <div>
                <Typography>Entire house in Osaka</Typography>
                <Typography>Osaka</Typography>
                <div style={{ borderBottom: '0.5px solid lightgrey', width: 25, margin: '10px 0px' }} />
                <Typography>6 guests 2 bedrroms 3beds 1.5 baths</Typography>
                <Typography>Hot tub Wifi Kitchen</Typography>
              </div>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <StarIcon style={{ color: '#FF385C', paddingRight: 5 }} />
                <Typography style={{ fontWeight: 600 }}>{grade()}</Typography>
                <Typography>{`(${commentsNumber()})`}</Typography>
              </div>
            </Grid>
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HouseInfo;