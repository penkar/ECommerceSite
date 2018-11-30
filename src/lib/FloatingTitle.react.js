import React from 'react';
type Props = {
  view:string
}
export default class FloatingTitle extends React.Component<Props> {
  render() {
    return (
      <div className={`FloatingTitle ${this.props.view ? "" : "home"}`}>
        <span>Mars Beach Wear</span>
      </div>
    );
  }
}
