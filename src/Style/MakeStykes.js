import { makeStyles } from '@material-ui/core/styles';

export const searchStyles = theme => ({
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

export const cardStyles = makeStyles({
  root: {
    margin: '0 auto',
    maxWidth: 280,
  },
  media: {
    height: 280,
  },
});

export const movieStyles = theme => ({
  root: {
    maxWidth: 1000,
    marginTop: 50,
    paddingTop: 20,
    margin: '0 auto',
    paddingBottom: 30,
  },
  elements: {
    maxWidth: 200,
    margin: '0 auto'
  },
  description: {
    maxWidth: 500,
    margin: '0 auto'
  },
  title: {
    textAlign: 'center',
    marginBottom: 30,
  },
  tags: {
    marginTop: 20,
    marginRight: 10,
  },
  genreTags: {
    marginTop: 10,
    marginRight: 10,
    // maxWidth: 100,
    // margin: '0 auto',
  }
})

export default cardStyles;
