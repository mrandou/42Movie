import React from 'react';
import { HeaderBar } from '../Style/StyledComponents'
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Movie42 from '../Assets/42Movie.png'
import { Link } from 'react-router-dom'

export default function Header() {
  return (
      <HeaderBar position="static">
        <Toolbar>
          <Link to={{pathname:"/"}} style={{ textDecoration: "none", color: "white" }}>
            <div>
              <img src={Movie42} alt="42 Movie" style={{ width: 35, position: 'absolute' }} />
              <Typography variant="h6" style={{ marginLeft: 45 }}>42 Movie</Typography>
            </div>
          </Link>
        </Toolbar>
      </HeaderBar>
  )
}
