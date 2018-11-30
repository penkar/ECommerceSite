import React from 'react';
import HeaderRow from './HeaderRow';
import SlideBackground from './SlideBackground';
import FloatingTitle from './FloatingTitle';
import HashUtilities from '../utilities/hash';
type Props = {hash:Object}

export default class EcommerceSite extends React.Component<Props, {}> {
  constructor(props) {
    super(props);
    this.state = {hash:HashUtilities.hashToJson()};
  }
  componentDidMount() {
    window.addEventListener("hashchange", ()=>this.hashChange());
  }
  render() {
    return (
      <div className="ECommerceSite">
        <HeaderRow />
        <SlideBackground view={this.state.hash.view} />
        <FloatingTitle view={this.state.hash.view} />
      </div>
    );
  }
  hashChange = () => {
    this.setState({hash: HashUtilities.hashToJson()});
  }
}
