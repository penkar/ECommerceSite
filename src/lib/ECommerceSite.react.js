import React from 'react';
import HeaderRow from './HeaderRow';
import SlideBackground from './SlideBackground';
import HashUtilities from '../utilities/hash';
type Props = {}

export default class EcommerceSite extends React.Component<Props, {}> {
  componentDidMount() {
    window.addEventListener("hashchange", ()=>this.hashChange());
  }
  render() {
    return (
      <div className="ECommerceSite">
        <HeaderRow />
        <SlideBackground />
      </div>
    );
  }
  hashChange = () => {
    console.log(20, window.location.hash)
  }
}
