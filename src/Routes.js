import React from 'react';

import { Route, Switch } from 'react-router-dom';

import Home from './pages/Home';
import Posts from './pages/Posts';
import Form from './pages/Form';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/posts" component={Posts} />
      <Route path="/posts/:id" component={Post} />
      <Route path="/publish" component={Form} />
      <Route component={NotFound} />
      {/* Needs be the last route */}
    </Switch>
  );
}