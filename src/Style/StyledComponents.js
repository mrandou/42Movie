import { styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import theme from './Theme'

export const MyApp = styled("div") ({
  // background: theme.backgroundColor,
  // height: '100vh'
});

export const HeaderBar = styled(AppBar)({
  background: theme.secondaryColor,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
});

export const FooterBar = styled(AppBar)({
  background: theme.secondaryColor,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 42,
  top: 'auto',
  bottom: 0,
});

export const Search = styled("div") ({
  paddingTop: '20px',
  textAlign: "center",
});

export const CardList = styled("div") ({
  marginRight: '20%',
  marginLeft: '20%',
  marginTop: '40px',
  marginBottom: '80px'
})

export default MyApp;
