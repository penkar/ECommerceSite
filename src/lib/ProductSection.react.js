import React from 'react'
import Products from './products.js';
type Props = {
  view:string,
  addToCart:Function
}

export default class ProductSection extends React.Component<Props> {
  render() {
    return (
      <div className="ProductSection">
        <div className="products">
          { Products.map((product) => {
            let review = this._randomize(product.reviews);
            return (
              <div className="product" key={product.title}>
                <div className="title">{product.title}</div>
                <img src={`./src/${product.path}`} className="product-image"/>
                <div className="price">{product.price}</div>
                <div className="stars">
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                  <i className="material-icons">star_rate</i>
                </div>
                <div className="review">{review.date.slice(0,300)}</div>
                <div className="review">{review.author.slice(0,300)}</div>
                <div className="review block">{review.description.slice(0,300)}</div>
                <input type="button" onClick={this._addToCart} data={product.id} value="Purchase"/>
              </div> )} )}
        </div>
      </div>
    )
  }
  _addToCart = ({target}) => {
    const item = target.getAttribute('data');
    this.props.addToCart(item);
  }
  _randomize = (array) => array[0];//array[Math.floor(Math.random()*array.length)];
}
