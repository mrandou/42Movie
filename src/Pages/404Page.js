import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom'

export default function Error404() {
  return (
    <div style={{ textAlign: 'center', marginTop: 50 }}>
      <Typography variant="h1">404</Typography>
      <Typography variant="h4">Page Not Found</Typography>
      <p>Maybe you are lost, I can help you !</p>
      <Link to={{pathname:"/"}}>
        <p>Click here to come back on the right way !</p>
      </Link>
    </div>
  )
}
