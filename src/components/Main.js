import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './Home';
import Product from './Product';

class Main extends Component {
  render() {
    return (
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/product/:productId" component={Product} />
      </Switch>
    );
  }
}

export default Main;
