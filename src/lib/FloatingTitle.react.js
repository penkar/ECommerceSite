import React from 'react';
const FloatingTitle = (view:string):React.Node => (
  <div className={`FloatingTitle ${view ? "" : "home"}`}>
    <span>Mars Beach Wear</span>
  </div>
);
export default FloatingTitle;
