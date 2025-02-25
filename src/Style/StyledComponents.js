import { styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import theme from './Theme'

export const MyApp = styled("header") ({
  backgroundColor: theme.backgroundColor,
  minHeight: "100vh",
})

export const HeaderBar = styled(AppBar)({
  background: theme.secondaryColor,
  color: 'white',
});

export const FooterBar = styled(AppBar)({
  background: theme.secondaryColor,
  color: 'white',
  textAlign: 'center',
  height: 50,
  top: 'auto',
  bottom: 0,
});

export const Search = styled("div") ({
  paddingTop: '30px',
  textAlign: "center",
});

export const CardList = styled("div") ({
  marginRight: '20%',
  marginLeft: '20%',
  marginTop: '40px',
  paddingBottom: '80px'
})

export const MoviePic = styled("img") ({
  maxWidth: 200,
  marginTop: 30,
  margin: '0 auto',
})

export default HeaderBar;
