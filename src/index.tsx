/* eslint-disable no-undef */
import React from 'react';
import { Provider } from 'react-redux';
import ReactDOM from 'react-dom';
import Kontakty from './Kontakty';
import konfiguracjaSklepu from './reduks/sklep';
import './style/glowny.scss';
import './polyfille/polyfills.min.js'

ReactDOM.render(
  <Provider store={konfiguracjaSklepu()}>
    <Kontakty />
  </Provider>,
  document.getElementById('root')
);
