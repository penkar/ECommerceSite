// @flow
import React from 'react';
import {render} from 'react-dom';

import ECommerceSite from './lib/ECommerceSite';
require('./index.scss');
const jsMount = document.getElementById('js-mount');
if(jsMount) {
  render(<ECommerceSite/>, jsMount);
}
