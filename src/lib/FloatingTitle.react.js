import React from 'react';
const FloatingTitle = (view:string) => (
  <div className={`FloatingTitle ${view ? "" : "home"}`}>
    <span>Mars Beach Wear</span>
  </div>
);
export default FloatingTitle;
