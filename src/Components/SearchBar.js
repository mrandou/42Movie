import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import SearchIcon from '@material-ui/icons/Search';
import MovieIcon from '@material-ui/icons/Movie';

const useStyles = theme => ({
  root: {
    marginTop: '30px',
    padding: '3px 5px',
    display: 'flex',
    alignItems: 'center',
    width: 400,
    margin: '0 auto'
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
});

class SearchBar extends React.Component {

  UserTyping = (e) => {
    this.props.research(e.target.value)
  }
  
  render() {
    const { classes } = this.props;

    return (
      <Paper component="form" className={classes.root}>
        <MovieIcon />
        <Divider className={classes.divider} orientation="vertical" />
        <InputBase
          className={classes.input}
          placeholder="Search Movies"
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

export default withStyles(useStyles)(SearchBar);
