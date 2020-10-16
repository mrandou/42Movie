import React from 'react';
import { HeaderBar } from '../Style/StyledComponents'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

export default function Header() {
  return (
    <div>
      <HeaderBar position="static">
        <Toolbar>
          <Link to={{pathname:"/"}} style={{ textDecoration: "none", color: "white" }}>
            <Typography variant="h6">42Movie</Typography>
          </Link>
        </Toolbar>
      </HeaderBar>
    </div>
  )
}
