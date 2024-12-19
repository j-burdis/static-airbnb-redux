import React, { Component } from 'react';

class Flat extends Component {
  render() {
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }
    return (
      <div className="flat card-trip" style={style}>
        <div className="card-trip-infos">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
        </div>
      </div>
    );
  }
}

export default Flat;
