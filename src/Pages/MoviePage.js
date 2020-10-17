import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper, Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { movieStyles } from '../Style/MakeStykes'
import { Language, Translate, Videocam, Info } from '@material-ui/icons/';
import defaultPic from '../Assets/defaultpic.jpg'

class MoviePage extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      MovieList: "",
      Movie: "",
    };
  }

  searchId = (id) => {
    const MovieList = this.state.MovieList;
    if (MovieList && MovieList.length === 1)
      return ;
    if (MovieList)
      {
      for (var i = 0; i < MovieList.length; i++)
      {
        if (MovieList[i].show.id === parseInt(id))
          this.setState({ Movie: MovieList[i].show })
      }
    }
  }

  componentDidMount() {
    if (this.props.location.state)
      this.setState({ Movie: this.props.location.state.Movie })
    else
    {
      axios.get('https://api.tvmaze.com/search/shows?q=test')
      .then(res => {
        const data = res.data;
        this.setState({ MovieList: data })
        this.searchId(this.props.match.params.id)
      })
    }
  }

  MovieNotFound() {
    return (
      <div>
        <h2>Movie Not Found</h2>
      </div>
    )
  }

  MovieSheet(Movie) {
    const { classes } = this.props;

    return (
      <div>
        <Paper elevation={5} className={classes.root}>
          <Typography variant="h3" className={classes.title}>
            {Movie.name}
          </Typography>
          <Grid container>
            <Grid item xs={4} className={classes.elements}>
              <img src={Movie.image ? Movie.image.medium : defaultPic } alt={Movie.name} className={classes.elements}/>
              <Grid container>
              {
                Movie.genres.map((genre, id) =>
                  <Grid key={id} item xs={6} className={classes.genreTags}>
                    <Chip 
                      label={genre}
                      size="small"
                      color="secondary"
                    />
                  </Grid>
                )
              }
              </Grid>
            </Grid>
            <Grid item xs={8} className={classes.description}>
              {
                Movie.summary
                ? <div dangerouslySetInnerHTML={{__html: Movie.summary}} />
                : <p>This movie doesn't have any description</p>

              }
              <Chip 
                icon={<Translate />}
                label={Movie.language ? Movie.language : "Unknown"}
                color="primary"
                placement="top"
                className={classes.tags}
              />
              <Chip 
                icon={<Videocam />}
                label={Movie.status ? Movie.status : "Unknown"}
                color={Movie.status === "Ended" ? "secondary" : "primary"}
                className={classes.tags}
              />
              <Chip 
                icon={<Info />}
                label={Movie.type ? Movie.type : "Unknown"}
                color={"primary"}
                className={classes.tags}
              />
               <Chip 
                icon={<Language />}
                label={Movie.network ? Movie.network.country.name : "Unknown"}
                color={"primary"}
                className={classes.tags}
              />
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }

  render() {
    console.log(this.state.Movie)
    return (
      <div>
        { 
          !this.state.Movie
          ? this.MovieNotFound()
          : this.MovieSheet(this.state.Movie)
        }
      </div>
      )
  }
}

MoviePage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(movieStyles)(MoviePage);
