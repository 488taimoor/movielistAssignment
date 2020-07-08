import { HashRouter, BrowserRouter, Router, Route, Switch, Link } from 'react-router-dom';

import React from 'react';
import ViewContainer from './Components/ViewContainer';
import MovieDetail from './Components/MovieDetail';
const Root = () => (

  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={ViewContainer} />
      <Route exact path='/detail' component={MovieDetail} />
      <Route default component={ViewContainer} />
    </Switch>
  </BrowserRouter >
);
export default Root;