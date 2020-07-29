import React from 'react';
import { Grid, Typography, Divider } from '@material-ui/core';
import LanguageIcon from '@material-ui/icons/Language';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import { useTheme } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';


function Footer(props) {



  const theme = useTheme();
  const smDown = useMediaQuery(theme.breakpoints.down('sm'));
  const footerLinks = [
    {
      title: 'ABOUT',
      subtitles: [
        'How Airbnb works',
        'Diversity & Belonging',
        'Accessibility',
        'Trust & Safety',
        ' Airbnb Citizen',
        'Olympics',
        'Newsroom',]
    },
    {
      title: 'COMMUNITY',
      subtitles: [
        'Airbnb Magazine',
        'Airbnb Associates',
        'Airbnb for Work',
        'Invite friends',
        'Careers']
    },
    {
      title: 'HOST',
      subtitles: [
        'Host your home',
        'Host an online experience',
        'Message from CEO Brian Chesky',
        'Responsible hosting',
        'Open Homes',
        'Resource Centre',
        'Community Centre'
      ]
    },
    {
      title: 'ABOUT',
      subtitles: [
        'Help centre',
        'Cancellation options',
        'neighbourhood support',
      ]
    },
  ]

  return (
    <Grid container justify='center' style={{ padding: '0px 10px', backgroundColor: '#F7F7F7', borderTop: '1px solid #DDDDDD' }}>
      <Grid item xs={10}>
        <Grid container justify='space-between' style={{ paddingTop: 40 }}>
          {footerLinks.map((x, i) => (
            <Grid key={i} item xs={12} md={2}>
              <Typography variant='caption' style={{ fontWeight: 600, paddingBottom: 15, display: 'block' }}>{x.title}</Typography>
              {x.subtitles.map((y, i) => (
                <Typography variant='caption' style={{ fontWeight: 400, display: 'block', paddingBottom: 10 }} key={i}>{y}</Typography>
              ))}
              {smDown ? <Divider variant='fullWidth' style={{ margin: '15px 0px' }} /> : null}
            </Grid>
          ))}
        </Grid>
        <Grid item xs={12} style={{ paddingBottom: 40 }}>
          {smDown ?
            <div>
              <div style={{display : 'flex', alignItems : 'center'}}>
                <Typography variant='body1' style={{ fontWeight: 400, textDecoration: 'underline', paddingRight: 20 }}>English(CA)</Typography>
                <Typography variant='body1' style={{ fontWeight: 400, textDecoration: 'underline', paddingRight: 30 }}>$ CAD</Typography>
              </div>
              <Typography variant='body1' style={{ fontWeight: 400, display: 'block', paddingTop: 10 }}>© 2020 Airbnb, Inc. All rights reserved·Privacy·Terms·Sitemap</Typography>
            </div>
            :
            <div>
              <Divider variant='fullWidth' />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 0px' }}>
                <Typography variant='caption' style={{ fontWeight: 400 }}>© 2020 Airbnb, Inc. All rights reserved·Privacy·Terms·Sitemap</Typography>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <LanguageIcon fontSize='small' />
                  <Typography variant='caption' style={{ fontWeight: 400, textDecoration: 'underline', paddingRight: 20 }}>English(CA)</Typography>
                  <Typography variant='caption' style={{ fontWeight: 400, textDecoration: 'underline', paddingRight: 30 }}>$ CAD</Typography>
                  <FacebookIcon fontSize='small' />
                  <TwitterIcon fontSize='small' style={{ padding: '0px 10px' }} />
                  <InstagramIcon fontSize='small' />
                </div>
              </div>
            </div>
          }
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;