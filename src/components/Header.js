import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Header extends Component {
  render() {
    return (
      <nav className="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
        <a className="navbar-brand" href="#">Vitamin hair</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarCollapse">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Home</Link><span className="sr-only">(current)</span>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Products
                </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
                <Link className="dropdown-item" to="/product/1">Product 1</Link>
                <Link className="dropdown-item" to="/product/2">Product 2</Link>
                {/* <a className="dropdown-item" href="#">Product 1</a>
                <a className="dropdown-item" href="#">Product 2</a>
                <a className="dropdown-item" href="#">Product 3</a> */}
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
            {/* <li className="nav-item dropdown">
              <a className="nav-item nav-link dropdown-toggle mr-md-2" href="#" id="bd-versions" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                v1.0
                </a>
              <div className="dropdown-menu dropdown-menu-right" aria-labelledby="bd-versions">
                <a className="dropdown-item active" href="/docs/4.0/">Latest (1.x)</a>
                <a className="dropdown-item" href="https://v4-alpha.getbootstrap.com">v0.0.3</a>
                <a className="dropdown-item" href="https://getbootstrap.com/docs/3.3/">v0.0.2</a>
                <a className="dropdown-item" href="https://getbootstrap.com/2.3.2/">v0.0.1</a>
              </div>
            </li> */}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
