// @flow
import * as React from 'react';
const SlideBackground = (view:string):React.Node => 
    <div className={`SlideBackground ${view ? "lighten" : ''}`} />
export default SlideBackground
