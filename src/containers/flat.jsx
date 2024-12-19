import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

class Flat extends Component {
  handleClick = () => {
    this.props.selectFlat(this.props.flat);
  }

  render() {
    const style = {
      backgroundImage: `url('${this.props.flat.imageUrl}')`,
      backgroundSize: 'cover',
      backgroundPosition: 'center'
    }

    let classes = "flat card";
    if (this.props.flat === this.props.selectedFlat) {
      classes += " selected";
    }

    return (
      <div className={classes} style={style} onClick={this.handleClick}>
        <div className="card-trip-infos">
          <h2>{this.props.flat.name}</h2>
          <p>{this.props.flat.price} {this.props.flat.priceCurrency}</p>
        </div>
      </div>
    );
  }
}

import { selectFlat } from '../actions';

function mapDispatchToProps(dispatch) { 
  return bindActionCreators(
    { selectFlat: selectFlat },
    dispatch
  );
} 

function mapReduxStateToProps(reduxState) { 
  return { 
    selectedFlat: reduxState.selectedFlat 
  }; 
} 

export default connect(mapReduxStateToProps, mapDispatchToProps)(Flat);
