import React, { Component } from 'react';
import s3 from '../styles/images/s3.png';

class Product extends Component {
  constructor(props) {
    super(props);

    this.state = {
      productId: this.props.match.params.productId
    }
  }

  render() {
    return (
      <div className="container">
        <div className="alert alert-primary" style={{marginTop: 20 + 'px'}} role="alert">
          You're viewing product information
        </div>
        <div className="card" style={{ width: 15 + 'rem' }}>
          <img className="card-img-top" src={s3} alt="Card image cap" />
          <div className="card-body">
            <h4 className="card-title">Product 1</h4>
            <p className="card-text">This is a type of vitamin hair</p>
            <a href="#" className="btn btn-success">Choose this</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
