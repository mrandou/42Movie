import React from 'react';
import axios from 'axios';
import { Search } from '../Style/StyledComponents'
import Typography from '@material-ui/core/Typography';
import SearchBar from '../Components/SearchBar'
import MovieCard from '../Components/MovieCard'
import Grid from '@material-ui/core/Grid';
import { CardList, MoviePic } from '../Style/StyledComponents'
import { nCompare, splitSpaces} from '../Utilities/Tools'
import Movie42 from '../Assets/42Movie.png'
import Movie42_no from '../Assets/42Movie_No.png'
import "../Style/Animation.css"

export default class HomePage extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      search: false,
      MovieList: "",
      CurrentList: [],
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
      this.setState({ search: UserResearch ? true : false })
    this.setState({ CurrentList: [] })
    this.CompareResult(UserResearch);
  }

  CompareResult = (UserResearch) => {
    const Movies = this.state.MovieList;
    var current = [];
    if (!UserResearch)
      return ;
    for (var i = 0; i < Movies.length; i++)
    {
      var splitName = splitSpaces(Movies[i].show.name.toLowerCase());
      for (var k = 0; k < splitName.length; k++)
      {
        if (nCompare(UserResearch.toLowerCase(), Movies[i].show.name.toLowerCase()))
        {
          current.push(Movies[i])
          break ;
        }
        else if (nCompare(UserResearch.toLowerCase(), splitName[k]))
        {
          current.push(Movies[i])
          break ;
        }
      }
    }
    this.setState({ CurrentList: current })
  }

  cardList = (data) => {
    var nb = [6, 4, 3];

    if (data.length < 4 && data.length)
      nb[2] = 12 / data.length;
    if (data.length < 3 && data.length)
      nb[1] = 12 / data.length;
    if (data.length < 2 && data.length)
      nb[0] = 12 / data.length;
    return (
      <CardList>
        <Grid container spacing={5}>
          {
            data.map((item, id) => 
              <Grid key={id} item xs={12} sm={nb[0]} md={nb[1]} lg={nb[2]}>
                <MovieCard data={item} />
              </Grid>
            )
          }
        </Grid>
      </CardList>
    )
  }

  render() {
    return (
      <div>
        <Search>
          <Typography variant="h4">42 Movie</Typography>
          <SearchBar research={this.research}/>
        </Search>
        <div>
          {
            this.state.CurrentList[0]
            ? this.cardList(this.state.CurrentList)
            : 
              <div style={{ textAlign: 'center' }}>
                <MoviePic
                  src={!this.state.search ? Movie42 : Movie42_no} 
                  alt="Movie" className={!this.state.search ? "move" : null} />
              </div>
          }
        </div>
      </div>
      
    )
  }
}
