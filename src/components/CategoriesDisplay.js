import React, { Component } from 'react'
import { Typography, Grid } from '@material-ui/core'
import { connect } from 'react-redux'
import { getPhotosCategories } from '../reduxStore/actions'
import { Skeleton } from '@material-ui/lab';


class CategoriesDisplay extends Component {
  componentDidMount() {
    this.props.getPhotosCategories();
  }


  render() {
    return (
      <div style={{ paddingBottom: 80 }}>
        <Grid container justify='center'>
          <Grid item xs={10}>
            <Grid container>
              <Grid item xs={10} md={4} style={{ paddingLeft: 10 }}>
                <Typography variant='h4' style={{ color: '#FF385C', padding: this.props.smDown ? 0 : '60px 0px' }}>
                  You don't need to go far to find what matters.
                </Typography>
              </Grid>
            </Grid>
            <Grid container justify='space-between'>
              {this.props.fetching ?
                [0, 1, 2].map(x => (
                  <Grid key={x} item xs={12} md={4} style={{ padding: 10 }}>
                    <Skeleton animation='wave' variant='rect' style={{ width: '100%', height: this.props.smDwon ? 200 : 300, borderRadius: 15 }} />
                  </Grid>
                ))
                :
                this.props.categoriesPhotos.map((x, i) => (
                  <Grid key={i} item xs={12} md={4} style={{ padding: 10 }}>
                    <div style={{ boxShadow: '0 3px 6px rgba(0,0,0,0.16), 0 3px 6px rgba(0,0,0,0.23)', borderRadius: 15, overflow: 'hidden' }}>
                      <div style={{ backgroundImage: `url(${x.urls.raw})`, backgroundPosition: 'center', backgroundSize: 'cover', height: this.props.smDown ? 208 : 258, width: '100%' }} />
                      <div style={{ padding: '10px 20px' }}>
                        <Typography style={{fontWeight : this.props.smDown ? 600 : 500}}>{this.props.categoriesTexts[i].title}</Typography>
                        <Typography style={{ color: 'grey', fontSize: this.props.smDown ? 14 : 10 }}>{this.props.categoriesTexts[i].subs}</Typography>
                      </div>
                    </div>
                  </Grid>
                ))
              }
            </Grid>
          </Grid>
        </Grid>

      </div>
    )
  }
}

const mapStateToProps = state => ({
  categoriesPhotos: state.categoriesPhotos.categoriesPhotos,
  categoriesTexts: state.categoriesPhotos.categories,
  fetching: state.categoriesPhotos.fetchingPhotosCategories
})

export default connect(mapStateToProps, { getPhotosCategories })(CategoriesDisplay)