import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';
import { searchStyles } from '../Style/MakeStyles'

class SearchBar extends React.Component {

  UserTyping = (e) => {
    this.props.research(e.target.value)
  }
  
  render() {
    const { classes } = this.props;

    return (
      <Paper className={classes.root}>
        <MovieIcon />
        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Search Movies"
          type="search"
          onChange={this.UserTyping}
        />
        <SearchIcon  className={classes.iconButton} />
      </Paper>
    );
  }
}

SearchBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(searchStyles)(SearchBar);
