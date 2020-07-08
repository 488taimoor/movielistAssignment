import React from 'react';
import '../App.css';
import { Card, makeStyles, CardContent } from '@material-ui/core';
import SearchBar from './SearchBar';
import MovieTable from './MovieTable';

function ViewContainer(props) {
  const classes = useStyles();
  console.log('this are props', props)
  return (
    
      <div className="App" style={{ display: "flex", height: '100%', justifyContent: 'center', alignItems: 'center' }}>
        <Card className={classes.root} variant="outlined">
          <SearchBar />
          <CardContent style={{ paddingLeft: 10, paddingRight: 10 }}>
            <MovieTable history={props.history} />
          </CardContent>
        </Card>
      </div>

  );
}

export default ViewContainer;
const useStyles = makeStyles({
  root: {
    minWidth: 275,
    maxWidth: 1000,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 30
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});