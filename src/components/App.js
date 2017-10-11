import React, { Component } from 'react';
import {Switch, Route} from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Product from './Product';
import Login from './Account/Login';
import Signup from './Account/Signup';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/products/:productId" component={Product} />
            <Route path="/products" component={Product} />
            <Route path="/login" component={Login} />
            <Route path="/signup" component={Signup} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
}

export default App;
