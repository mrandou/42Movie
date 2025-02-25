import React from 'react';
import axios from 'axios';
import Typography from '@material-ui/core/Typography';
import { Grid, Paper, Chip } from '@material-ui/core';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { movieStyles } from '../Style/MakeStyles'
import { Language, Translate, Videocam, Info, Home } from '@material-ui/icons/';
import defaultPic from '../Assets/defaultpic.jpg'
import Movie42_no from '../Assets/42Movie_No.png'
import { Link } from 'react-router-dom'

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
      <div style={{ textAlign: 'center', marginTop: 50, color: "white" }}>
        <Typography variant="h4">Movie Not Found</Typography>
        <img src={Movie42_no} alt="No Movie" style={{ maxWidth: 200 }} />
        <p>Maybe it's a mistake !</p>
        <Link to={{pathname:"/"}} style={{ color: "white" }}>
          <p>Click here to come back on the right way !</p>
        </Link>
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
              {
                Movie.genres.map((genre, id) =>
                    <Chip
                      key={id}
                      label={genre}
                      size="small"
                      color="secondary"
                      className={classes.genreTags}
                    />
                )
              }
            </Grid>
            <Grid item xs={8} className={classes.description}>
              {
                Movie.summary
                ? <div dangerouslySetInnerHTML={{__html: Movie.summary}} />
                : <p>This movie doesn't have any description</p>
              }
              <p>
                Schedule : {
                  Movie.schedule
                  ? Movie.schedule.days[0]
                  ? Movie.schedule.days[0] : "Unknown"
                  : null
                }
              </p>
              <p>Premiered : {Movie.premiered ? Movie.premiered : "Unknown"}</p>
              <p>Rating : {Movie.rating.average ? Movie.rating.average : "Unkown"}</p>
              <div className={classes.tagsGrup}>
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
              </div>
              <div  className={classes.home}>
                <Link to={{pathname:"/"}}>
                  <Home color="primary"/>
                </Link>
              </div>
            </Grid>
          </Grid>
        </Paper>
      </div>
    )
  }

  render() {
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
