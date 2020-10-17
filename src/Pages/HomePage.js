import React from 'react';
import axios from 'axios';
import { Search } from '../Style/StyledComponents'
import Typography from '@material-ui/core/Typography';
import SearchBar from '../Components/SearchBar'
import MovieCard from '../Components/MovieCard'
import Grid from '@material-ui/core/Grid';
import { CardList } from '../Style/StyledComponents'
import { nCompare, splitSpaces} from '../Utilities/Tools'

export default class HomePage extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
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
    var nb = 3;

    if (data.length < 4 && data.length)
      nb = 12 / data.length
    return (
      <CardList>
        <Grid container spacing={5}>
          {
            data.map((item, id) => 
              <Grid key={id} item xs={nb}>
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
          <Typography variant="h4">Welcolme to 42 Movie</Typography>
          <SearchBar research={this.research}/>
        </Search>
        <div>
          {
            this.state.CurrentList[0]
            ? this.cardList(this.state.CurrentList)
            : null
          }
        </div>
      </div>
      
    )
  }
}

/*

nCompare(str1, str2) {
  if (!str1.length)
    return (false)
  for (var i = 0; i < str1.length; i++)
    if (str1[i] !== str2[i])
      return (false);
  return (true);
}

splitSpaces(str) {
  var result = [];
  var tmp = "";

  if (!str)
    return (null);
  for (var i = 0; i < str.length; i++)
  {
    if (str[i] !== ' ')
      tmp += str[i];
    else
    {
      result.push(tmp);
      tmp = "";
    }
  }
  result.push(tmp);
  console.log(str, " -> ", result)
  return (result)
}

CompareResult = (UserResearch) => {
  const Movies = this.state.MovieList;
  var current = [];
  if (!UserResearch)
    return ;
  for (var i = 0; i < Movies.length; i++)
  {
    var splitName = this.splitSpaces(Movies[i].show.name.toLowerCase());
    for (var k = 0; k < splitName.length; k++)
      if (this.nCompare(UserResearch.toLowerCase(), splitName[k]))
      {
        current.push(Movies[i])
        break ;
      }
  }
  this.setState({ CurrentList: current })
} */
