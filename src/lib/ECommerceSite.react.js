import React from 'react';
import HeaderRow from './HeaderRow';
import SlideBackground from './SlideBackground';
import FloatingTitle from './FloatingTitle';
import ProductSection from './ProductSection';

import HashUtilities from '../utilities/hash';
type Props = {hash:Object}

export default class EcommerceSite extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {hash:HashUtilities.hashToJson()};
  }
  componentDidMount() {
    window.addEventListener("hashchange", ()=>this.hashChange());
    window.addEventListener("scroll", ()=>this.scrollChange());
  }
  render() {
    const view = this.state.hash.view;
    return (
      <div className={`ECommerceSite ${view ? "open" : "" }`}>
        <HeaderRow />
        <SlideBackground view={view} />
        <FloatingTitle view={view} />
        <ProductSection view={view} />
      </div>
    );
  }

  hashChange = () => {
    this.setState({hash: HashUtilities.hashToJson()});
  }
  scrollChange = () => {
    const hash = this.state.hash;
    if([undefined, "beachwear"].indexOf(hash.view) === -1) return null;
    if(window.pageYOffset > (window.innerHeight - 100)) {
      hash.view = "beachwear";
    } else {
      hash.view = undefined;
    }
    return this.setState({hash});
  }
}
