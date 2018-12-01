import React from 'react'
import Products from './products.js';
const ProductSection = (view:string, addToCart:Function) => {
  const _addToCart = ({target}) => {
    const item = target.getAttribute('data');
    addToCart(item);
  }
  return (
    <div className="ProductSection">
      <div className="products">
        { Products.map(({id, reviews, title, path, price}) => (
          <div className="product" key={title}>
            <div className="title">{title}</div>
            <img src={`./src/${path}`} className="product-image"/>
            <div className="price">{price}</div>
            <div className="stars">
              <i className="material-icons">star_rate</i>
              <i className="material-icons">star_rate</i>
              <i className="material-icons">star_rate</i>
              <i className="material-icons">star_rate</i>
              <i className="material-icons">star_rate</i>
            </div>
            <div className="review">{reviews[0].date.slice(0,300)}</div>
            <div className="review">{reviews[0].author.slice(0,300)}</div>
            <div className="review block">{reviews[0].description.slice(0,300)}</div>
            <input type="button" onClick={_addToCart} data={id} value="Purchase"/>
          </div> ) )}
      </div>
    </div>
  )
}
export default ProductSection
