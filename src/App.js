import React from 'react';
import './App.css';
import { makeStyles,} from '@material-ui/core';
import SnackbarProvider from 'react-simple-snackbar'
import Root from './routes';
import MovieContextProvider from './Context/MoviesContext';

function App() {
  const classes = useStyles();
  return (
    <SnackbarProvider>
      <MovieContextProvider>
     <Root/>
     </MovieContextProvider>
    </SnackbarProvider>

  );
}

export default App;
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