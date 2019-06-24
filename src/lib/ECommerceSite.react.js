// @flow
import React from 'react';
import CartPage from './CartPage';
import FloatingTitle from './FloatingTitle';
import HeaderRow from './HeaderRow';
import ProductSection from './ProductSection';
import SlideBackground from './SlideBackground';

import HashUtilities from '../utilities/hash';
type Props = {hash:Object}

export default class EcommerceSite extends React.Component<Props> {
  constructor(props:Props) {
    super(props)
    this.state = {
      hash:HashUtilities.hashToJson(),
    };
  }
  componentDidMount() {
    window.addEventListener("hashchange", ()=>this._hashChange());
    window.addEventListener("scroll", ()=>this._scrollChange());
  }
  render() {
    const view = this.state.hash.view;
    return (
      <div className={`ECommerceSite ${view ? "open" : "" }`}>
        <HeaderRow />
        { FloatingTitle(view) }
        {[undefined, "beachwear", ""].indexOf(view) !== -1 &&
          <React.Fragment>
            { SlideBackground(view) }
            { ProductSection(view, this._addToCart) }
          </React.Fragment> }
        { view === "cart" && <CartPage change={this._adjustCart}/> }
      </div>
    );
  }
  _adjustCart = (item, value) => {
    const cart = JSON.parse(localStorage.getItem('products') ||"{}");
    cart[item] = value;
    localStorage.setItem('products', JSON.stringify(cart));
    this.setState({cart});
  }
  _addToCart = (item) => {
    const cart = JSON.parse(localStorage.getItem('products') ||"{}");
    cart[item] = (cart[item] || 0) + 1;
    localStorage.setItem('products', JSON.stringify(cart));
    this.setState({cart});
  }
  _hashChange = () => {
    this.setState({hash: HashUtilities.hashToJson()});
  }
  _scrollChange = () => {
    const hash = this.state.hash;
    if([undefined, "beachwear", ""].indexOf(hash.view) === -1) return null;
    if(window.pageYOffset > (window.innerHeight - 100)) {
      hash.view = "beachwear";
    } else {
      hash.view = undefined;
    }
    return this.setState({hash});
  }
}
