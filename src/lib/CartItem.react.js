import React from 'react';
import Products from './products.js';

const CartItem = ([item, size], change) => {
  if(!size) return null;
  const product = Products.find(thing => thing.id === item), changeCount = (event) => {
    change(item, event.target.value);
  }, clear = () => {
    change(item, 0);
  }

  return (
    <div className="CartItem" key={item}>
      <div className="img">
        <img src={`./src/${product.path}`} />
      </div>
      <div className="item-title">{product.title}</div>
      <div className="price">{product.price}</div>
      <div className="qty">
        <select value={size} onChange={changeCount}>
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10+</option>
        </select>
      </div>
      <div className="clear">
        <i className="material-icons" onClick={clear}>close</i>
      </div>
    </div>
  );
}
export default CartItem;