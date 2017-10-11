import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

class Home extends Component {
  constructor() {
    super();

    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    const productId = e.target.value;
    this.props.history.push(`/products/${productId}`);
  }
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Product 1</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><button className="btn btn-info" value="1" onClick={this.handleClick}>View details &raquo;</button></p>
            </div>
            <div className="col-md-4">
              <h2>Product 2</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><button className="btn btn-info" value="2" onClick={this.handleClick}>View details &raquo;</button></p>
            </div>
            <div className="col-md-4">
              <h2>Product 3</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-secondary" href="#" role="button">Coming soon &raquo;</a></p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default Home;
