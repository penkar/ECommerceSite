import React from 'react';
type Props = {
  view:string
}

export default class SlideBackground extends React.Component<Props> {
  render() {
    return(
      <div className={`SlideBackground ${this.props.view ? "lighten" : ''}`}>
      </div>
    )
  }
}
