import { styled } from '@material-ui/core/styles';
import { AppBar } from '@material-ui/core';
import theme from './Theme'

export const MyApp = styled("div") ({
  // background: theme.backgroundColor,
});

export const HeaderBar = styled(AppBar)({
  background: theme.barColor,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
});

export const FooterBar = styled(AppBar)({
  background: theme.barColor,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 36,
  top: 'auto',
  bottom: 0,
});

export default MyApp;
