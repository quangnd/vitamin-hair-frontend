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
                <Link className="dropdown-item" to="/products/1">Product 1</Link>
                <Link className="dropdown-item" to="/products/2">Product 2</Link>
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
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className="nav-link" to="/login">Login</Link>
            </li>
            <li className="nav-item">
            <Link className="nav-link" to="/signup">Signup</Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Header;
