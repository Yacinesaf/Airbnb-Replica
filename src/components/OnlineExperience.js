import React, { Component } from 'react'
import { Grid, Typography, Button, Card, CardActionArea, CardActions, CardMedia } from '@material-ui/core'

class OnlineExperience extends Component {
  constructor(props) {
    super(props)

    this.state = {
      online: [
        {
          img: 'https://a0.muscache.com/im/pictures/9fe6fb99-5062-4b10-9fcb-8403f8f299c4.jpg?im_w=720',
          text: 'Learn favourite summer recipes with celebrated chef Rōze Traore',
        },
        {
          img: 'https://a0.muscache.com/im/pictures/3a226e03-acf8-4003-a56d-28e4bd04de65.jpg?im_w=720',
          text: 'Fruits de mer with Michelin chef Marc Favier',
        },
        {
          img: 'https://a0.muscache.com/im/pictures/7dbbb8d7-352c-4e62-9f6a-585d96886b4e.jpg?im_w=720',
          text: 'Pairing and plating with Michelin chef Soo Ahn',
        },
        {
          img: 'https://a0.muscache.com/im/pictures/71a6bab1-99df-4ffa-be53-73bbfe7fbc24.jpg?im_w=720',
          text: 'Make seasonal dishes with London’s star chef Anthea Stephenson',
        }
      ]

    }
  }

  render() {
    return (
      <Grid container justify='center' style={{ backgroundColor: 'black', minHeight: '100vh', padding: this.props.smDown ? '20px 10px' : '60px 10px' }}>
        <Grid item xs={10}>
          <Grid container >
            <Grid item xs={12} style={{ display: this.props.smDown ? 'block' : 'flex', justifyContent: 'space-between', paddingBottom: 40 }}>
              <div>
                <Typography variant={this.props.smDown ? 'h6' : 'h4'} style={{ color: 'white', fontWeight: 600 }}>Online Experiences with top chefs</Typography>
                <Typography variant='caption' style={{ color: 'white', display: 'block' }}>Cook with culinary legends and learn the stories behind their favourite dishes. Join unique</Typography>
                <Typography variant='caption' style={{ color: 'white' }}>interactive activities led by one-of-a-kind hosts—all without leaving home.</Typography>
              </div>
              <div>
                <Button variant='outlined' color='inherit' style={{ color: 'white', borderRadius: 7, textTransform: 'none', marginTop: this.props.smDown ? 20 : 0 }}>Explore all</Button>
              </div>
            </Grid>
            <Grid item xs={12} md={6} style={{ paddingBottom: 18 }}>
              <Card style={{ width: '100%', borderRadius: 15 }}>
                <CardActionArea>
                  <CardMedia
                    style={{ height: this.props.smDown ? 224 : 724, width: '100%' }}
                    image={this.state.online[0].img}
                  />
                </CardActionArea>
                <CardActions style={{ backgroundColor: 'rgb(34, 34, 34)', color: 'white', padding: 16, height: 44 }}>
                  <Typography color='inherit' >{this.state.online[0].text}</Typography>
                </CardActions>
              </Card>
            </Grid>
            <Grid item xs={12} md={6} style={{ maxHeight: this.props.smDown ? 'unset' : 800, paddingLeft: this.props.smDown ? 0 : 20 }}>
              <Grid container>
                <Grid item xs={12} md={6} style={{ paddingBottom: 18, paddingRight: this.props.smDown ? 0 : 5 }}>
                  <Card style={{ width: '100%', borderRadius: 15 }}>
                    <CardActionArea>
                      <CardMedia
                        style={{ height: this.props.smDown ? 224 : 316, width: '100%' }}
                        image={this.state.online[1].img}
                      />
                    </CardActionArea>
                    <CardActions style={{ backgroundColor: 'rgb(34, 34, 34)', color: 'white', padding: 16, height: 44 }}>
                      <Typography color='inherit' >{this.state.online[1].text}</Typography>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12} md={6} style={{ paddingBottom: 18, paddingLeft: this.props.smDown ? 0 : 5 }}>
                  <Card style={{ width: '100%', borderRadius: 15 }}>
                    <CardActionArea>
                      <CardMedia
                        style={{ height: this.props.smDown ? 224 : 316, width: '100%' }}
                        image={this.state.online[2].img}
                      />
                    </CardActionArea>
                    <CardActions style={{ backgroundColor: 'rgb(34, 34, 34)', color: 'white', padding: 16, height: 44 }}>
                      <Typography color='inherit' >{this.state.online[2].text}</Typography>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item xs={12}>
                  <Card style={{ width: '100%', borderRadius: 15 }}>
                    <CardActionArea>
                      <CardMedia
                        style={{ height: this.props.smDown ? 224 : 316, width: '100%' }}
                        image={this.state.online[3].img}
                      />
                    </CardActionArea>
                    <CardActions style={{ backgroundColor: 'rgb(34, 34, 34)', color: 'white', padding: 16, height: 44 }}>
                      <Typography color='inherit' >{this.state.online[3].text}</Typography>
                    </CardActions>
                  </Card>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    )
  }
}

export default OnlineExperience;