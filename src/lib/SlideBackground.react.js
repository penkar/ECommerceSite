import React from 'react';
import ChasingSunrise from '../assets/Death_to_Stock_Chasing_Sunrise_9_Julian_DeSchutter.jpg'

type Props = {
  src:string
}

export default class SlideBackground extends React.Component<Props> {
  render() {
    return(
      <img className="slide-background-component" src={ChasingSunrise}></img>
    )
  }
}
