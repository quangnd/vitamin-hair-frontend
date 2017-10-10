import React, { Component } from 'react';
import Jumbotron from './Jumbotron';

class Home extends Component {
  constructor() {
    super();

    this.state = { isToggleOn: true };
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick() {
    this.setState(prevState => ({
      isToogleOn: !prevState.isToogleOn
    }));
  }
  render() {
    return (
      <div>
        <Jumbotron />
        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Product 1</h2>
              <p>{this.state.isToogleOn ? 'ON' : 'OFF'}</p>
              <p><button className="btn btn-secondary" onClick={this.handleClick}>View details &raquo;</button></p>
            </div>
            <div className="col-md-4">
              <h2>Product 2</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-md-4">
              <h2>Product 3</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
          </div>
          <hr/>
        </div>
      </div>
    );
  }
}

export default Home;
