import React from 'react';
import axios from 'axios';
import { Search } from '../Style/StyledComponents'
import Typography from '@material-ui/core/Typography';
import SearchBar from '../Components/SearchBar'
import MovieCard from '../Components/MovieCard'
import Grid from '@material-ui/core/Grid';
import { CardList } from '../Style/StyledComponents'

export default class HomePage extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      MovieList: "",
      UserResearch: "",
    };
  }
  
  componentDidMount() {
    axios.get('https://api.tvmaze.com/search/shows?q=test')
      .then(res => {
        const data = res.data;
        this.setState({ MovieList: data });
      })
    }

  research = (UserResearch) => {
    this.setState({ UserResearch })
  }

  cardList = (data) => {
    return (
      <CardList>
        <Grid container spacing={5}>
          {
            data.map((item, id) => 
              <Grid key={id} item xs={4}>
                <MovieCard data={item} />
              </Grid>
            )
          }
        </Grid>
      </CardList>
    )
  }

  render() {
    console.log(this.state.MovieList)
    return (
      <div>
        <Search>
          <Typography variant="h4">Welcolme to 42 Movie</Typography>
          <SearchBar research={this.research}/>
        </Search>
        <div>
          {
            this.state.MovieList
            ? this.cardList(this.state.MovieList)
            : null
          }
        </div>
      </div>
      
    )
  }
}
