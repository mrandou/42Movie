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

export default cardStyles;
