import React from 'react';

import { Route, Switch, useLocation } from 'react-router-dom';
import { useTransition, animated } from 'react-spring'

import Home from './pages/Home';
import Posts from './pages/Posts';
import Form from './pages/Form';
import NotFound from './pages/NotFound';
import Post from './pages/Post';

export default function Routes() {
  const location = useLocation();
  const transitions = useTransition(location, {
    from:  { opacity: 0, transform: 'translateY(50px)', position: 'absolute' }, // Styles before component enter on the screen
    enter: { opacity: 1, transform: 'translateY(0)', position: 'absolute' }, // Styles when component is entering on screen
    leave: { opacity: 0, transform: 'translateY(50px)', position: 'absolute' },  // Styles when component is leaving the screen
  });


  return transitions((props, item) => (
    <animated.div style={props}>
      <Switch location={item}>
        <Route exact path="/" component={Home} />
        <Route exact path="/posts" component={Posts} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/publish" component={Form} />
        <Route component={NotFound} />
        {/* Needs be the last route */}
      </Switch>
    </animated.div>
  ));
}