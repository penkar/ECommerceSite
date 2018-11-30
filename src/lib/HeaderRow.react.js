import React from 'react';
import HashUtilities from '../utilities/hash';

export default class HeaderRow extends React.Component {
  render() {
    return (
      <div className="HeaderRow">
        <div className="align-left content">
          <div className="item">
            <span className="title">
              <a href={HashUtilities.jsonToHash({view:""})}>Home</a>
            </span>
          </div>
          <div className="item expandable">
            <span className="title">Products</span>
            <ul className="extras">
              <li><a href={HashUtilities.jsonToHash({view:'beachwear'})}>Beach Wear</a></li>
              <li><a href={HashUtilities.jsonToHash({view:'sunglasses'})}>Sunglasses</a></li>
              <li><a href={HashUtilities.jsonToHash({view:'skincare'})}>Skincare</a></li>
              <li><a href={HashUtilities.jsonToHash({view:'beachboards'})}>Beachboards</a></li>
            </ul>
          </div>
          <div className="item">
            <span className="title">
              <a href={HashUtilities.jsonToHash({view:'specialorders'})}>Special Orders</a>
            </span>
          </div>
        </div>
        <div className="align-right content">
          <div className="menu-icon">
            <a href={HashUtilities.jsonToHash({view:'search'})}><i className="material-icons">search</i></a>
          </div>
          <div className="menu-icon">
            <a href={HashUtilities.jsonToHash({view:'cart'})}><i className="material-icons">shopping_cart</i></a>
          </div>
        </div>
      </div>
    )
  }
}
