import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <div>
        <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
          <a className="navbar-brand" href="#">Vitamin hair</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarCollapse">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Products
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
                  <a className="dropdown-item" href="#">Product 1</a>
                  <a className="dropdown-item" href="#">Product 2</a>
                  <a className="dropdown-item" href="#">Product 3</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Place order</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Stores</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
            </ul>
            {/* <form className="form-inline mt-2 mt-md-0">
              <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"/>
                <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form> */}
            <ul className="navbar-nav flex-row ml-md-auto d-none d-md-flex">
            <li className="nav-item">
                <a className="nav-link" href="#">Sign in</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  v1.0
                </a>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
                  <a className="dropdown-item active" href="/docs/4.0/">Latest (1.x)</a>
                  <a className="dropdown-item" href="https://v4-alpha.getbootstrap.com">v0.0.3</a>
                  <a className="dropdown-item" href="https://getbootstrap.com/docs/3.3/">v0.0.2</a>
                  <a className="dropdown-item" href="https://getbootstrap.com/2.3.2/">v0.0.1</a>
                </div>
              </li>
            </ul>
          </div>
        </nav>
        <div className="jumbotron jumbotron-fluid">
          <div className="container">
            <h1>Welcome to Vitamin hair's site</h1>
            <p className="lead">We are here to help you and make the better life!</p>
            <a className="btn btn-lg btn-primary" href="#" role="button">Read more &raquo;</a>
          </div>
        </div>

        <div className="container">
          <div className="row">
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>Donec id elit non mi porta gravida at eget metus. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus. Etiam porta sem malesuada magna mollis euismod. Donec sed odio dui. </p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
            <div className="col-md-4">
              <h2>Heading</h2>
              <p>Donec sed odio dui. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Vestibulum id ligula porta felis euismod semper. Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum nibh, ut fermentum massa justo sit amet risus.</p>
              <p><a className="btn btn-secondary" href="#" role="button">View details &raquo;</a></p>
            </div>
          </div>
          <hr/>
        </div>
        <div className="container">
          <footer>
            <p className="float-right"><a href="#">Back to top</a></p>
            <p>&copy; 2017 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
          </footer>
        </div>
      </div>
    );
  }
}

export default App;
