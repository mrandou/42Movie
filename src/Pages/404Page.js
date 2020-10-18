import React from 'react';
import Typography from '@material-ui/core/Typography';
import Movie42_404 from '../Assets/42Movie_404.png'
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div style={{ textAlign: 'center', marginTop: 50, color: "white" }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Page Not Found</Typography>
      <img src={Movie42_404} alt="404" style={{ maxWidth: 200 }} />
      <p>Maybe you are lost, I can help you !</p>
      <Link to={{pathname:"/"}} style={{ color: "white" }}>
        <p>Click here to come back on the right way !</p>
      </Link>
    </div>
  )
}
