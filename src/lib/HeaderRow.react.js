import React from 'react';
import HashUtilities from '../utilities/hash';
export default class HeaderRow extends React.Component {
  render() {
    const total = this._getTotalInCart();
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
              <li>
                <a href={HashUtilities.jsonToHash({view:'beachwear'})}>Beach Wear</a>
              </li>
              <li>
                <a href={HashUtilities.jsonToHash({view:'sunglasses'})}>Sunglasses</a>
              </li>
              <li>
                <a href={HashUtilities.jsonToHash({view:'skincare'})}>Skincare</a>
              </li>
              <li>
                <a href={HashUtilities.jsonToHash({view:'beachboards'})}>Beachboards</a>
              </li>
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
            <a href={HashUtilities.jsonToHash({view:'search'})}>
              <i className="material-icons">search</i>
            </a>
          </div>
          <div className="menu-icon search">
            <a href={HashUtilities.jsonToHash({view:'cart'})}>
              <i className="material-icons">shopping_cart</i>
              <span className="total">{ !!total && total }</span>
            </a>
          </div>
        </div>
      </div>
    );
  }
  _getTotalInCart = () => {
    const products = Object.values(JSON.parse(localStorage.getItem('products')));
    if(!products || !products.length) return 0;
    return products.reduce((x,y) => (parseInt(x) + parseInt(y)));
  }
}
