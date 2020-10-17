import React from 'react';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import defaultPic from '../Assets/defaultpic.jpg'
import { cardStyles } from '../Style/MakeStyles';
import { Link } from 'react-router-dom'

export default function MovieCard(data) {
  const classes = cardStyles();
  const Movie = data.data.show;
  return (
    <Link to={{ pathname: "/Movie/" + Movie.id, state: { Movie: Movie }}}
     style={{ textDecoration: "none", color: "white" }}>
      <Card className={classes.root}>
        <CardActionArea>
          <CardMedia
            className={classes.media}
            image={Movie.image ? Movie.image.medium : defaultPic}
            title={Movie.name}
          />
          <CardContent>
            <Typography gutterBottom variant="h5" component="h2">
              {Movie.name}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  )
}
