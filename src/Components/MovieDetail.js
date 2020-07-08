import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 400,
  },
  media: {
    height: 140,
  },
  container:{
    display:"flex",
    justifyContent:'center',
    alignItems:'center',
    paddingTop:40
  }
});

export default function MovieDetail(props) {
  const[movieDetial, setMovieDetial] = useState()
  const classes = useStyles();
  useEffect(()=>{
    if(props.location.state){
      console.log('these are prosp detial',props)
      setMovieDetial(props.location.state)
    }
  },[])

  useEffect(()=>{
      console.log('this is movie detial',movieDetial)
 
  },[movieDetial])

  return (
    <div className={classes.container}>
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={movieDetial?.Poster}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {movieDetial?.Title}
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
           Year
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {movieDetial?.Year}
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
           Plot:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {movieDetial?.Plot}
          </Typography>


          <Typography variant="body2" color="textPrimary" component="p">
          Director:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {movieDetial?.Director}
          </Typography>

          <Typography variant="body2" color="textPrimary" component="p">
          Language:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {movieDetial?.Language}
          </Typography>


          <Typography variant="body2" color="textPrimary" component="p">
          BoxOffice:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {movieDetial?.BoxOffice}
          </Typography>


          <Typography variant="body2" color="textPrimary" component="p">
          Actors:
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          {movieDetial?.Actors}
          </Typography>


        </CardContent>
      </CardActionArea>
    </Card>
    </div>
  );
}
