import { makeStyles } from '@material-ui/core/styles';
import Theme from './Theme'

export const searchStyles = theme => ({
  root: {
    marginTop: '25px',
    padding: '3px 5px',
    display: 'flex',
    alignItems: 'center',
    maxWidth: 400,
    boxShadow: "0 0px 0px 3px " + Theme.secondaryColor,
    borderRadius: 24,
    [theme.breakpoints.down(430)] : {
      marginRight: "5%",
      marginLeft: "5%",
    },
    marginBottom: 40,
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

export const cardStyles = makeStyles({
  root: {
    margin: '0 auto',
    maxWidth: 280,
    color: "white",
    textAlign: 'center',
    backgroundColor: Theme.cardColor,
  },
  media: {
    height: 280,
  },
});

export const movieStyles = theme => ({
  root: {
    maxWidth: 1000,
    marginTop: 50,
    paddingTop: 50,
    margin: '0 auto',
    paddingBottom: 100,
    color: "white",
    backgroundColor: Theme.cardColor
  },
  elements: {
    maxWidth: 200,
    margin: '0 auto'
  },
  description: {
    maxWidth: 500,
    textAlign: "justify",
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
  },
  tagsGrup: {
    [theme.breakpoints.down(600)] : {
      textAlign: 'center',
    },
  },
  tags: {
    marginTop: 20,
    marginRight: 10,
  },
  genreTags: {
    marginTop: 10,
    marginRight: 10,
  },
  home: {
    textAlign:"right",
    [theme.breakpoints.down(600)] : {
      textAlign:"center",
    },
    marginTop: 50,
  }
})

export default cardStyles;
