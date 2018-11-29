import React from 'react';

export default class HeaderRow extends React.Component {
  render() {
    return (
      <div className="HeaderRow">
        <div className="align-left content">
          <div className="item">
            <span className="title">
              <a href="">Home</a>
            </span>
          </div>
          <div className="item expandable">
            <span className="title">Products</span>
            <ul className="extras">
              <li><a href="#beachwear">Beach Wear</a></li>
              <li><a href="#sunglasses">Sunglasses</a></li>
              <li><a href="#skincare">Skincare</a></li>
              <li><a href="#beachboards">Beachboards</a></li>
            </ul>
          </div>
          <div className="item">
            <span className="title">Special Orders</span>
          </div>
        </div>
        <div className="align-right content">
          <div className="menu-icon">
            <a href="#search"><i className="material-icons">search</i></a>
          </div>
          <div className="menu-icon">
            <a href="#cart"><i className="material-icons">shopping_cart</i></a>
          </div>
        </div>
      </div>
    )
  }
}
