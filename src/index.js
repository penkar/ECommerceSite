// @flow
import React from 'react';
import {render} from 'react-dom';

import ECommerceSite from './lib/ECommerceSite';
require('./index.scss');

render(<ECommerceSite/>, document.getElementById('js-mount'));
