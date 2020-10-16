import React from 'react';
import { Search } from '../Style/StyledComponents'
import Typography from '@material-ui/core/Typography';
import SearchBar from '../Components/SearchBar'

export default class HomePage extends React.Component {
  constructor(props) {
		super(props);
		this.state = {
      UserResearch: "",
    };
  }
  
  research = (UserResearch) => {
    this.setState({ UserResearch })
  }

  render() {
    return (
      <Search>
        <Typography variant="h4">Welcolme to 42 Movie</Typography>
        <SearchBar research={this.research}/>
      </Search>
    )
  }
}
