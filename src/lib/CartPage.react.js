import React from 'react';
import CartItem from './CartItem'
type Props = {
  cart: Object,
}
export default class CartPage extends React.Component<Props> {
  render() {
    return (
      <div className="CartPage">
        <div className="title">Shopping Cart</div>

        <div className="CartItem" key="idx">
          <div className="img"></div>
          <div className="item-title">Product</div>
          <div className="price">Price</div>
          <div className="qty">Quantity</div>
        </div>

        { this._constructCart().map(cartItem => CartItem(cartItem)) }

      </div>
    );
  }
  _constructCart = () => {
    const products = JSON.parse(localStorage.getItem('products')) || {};
    const sortedProducts = Object.entries(products).sort((x,y) => x[0] > y[0]);
    return sortedProducts;
  }
}
