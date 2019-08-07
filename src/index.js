import React from 'react';
import { render } from 'react-dom';
import App from './components/App';
import '../scss/index.scss';

console.log(process.env.NODE_ENV);
console.log(process.env.SOME_KEY);

function init() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  document.querySelector('noscript').remove();
  render(<App />, root);
}

window.debug = process.env.NODE_ENV === 'development' ? (vars, styles = {}) => (
  <pre style={{maxWidth:'100%',overflow:'scroll', ...styles}}>{JSON.stringify(vars, null, 2)}</pre>
) : vars => null;

// https://polyfill.io/v3/url-builder/
const features = [];
// ('fetch' in window) || features.push('fetch');
// ('Promise' in window) || features.push('Promise');
// ('assign' in Object) || features.push('Object.assign');
// ('from' in Array) || features.push('Array.from');
// ('find' in Array.prototype) || features.push('Array.prototype.find');
// ('includes' in Array.prototype) || features.push('Array.prototype.includes');

if (polyfills.length) {
  const script = document.createElement('script');
  script.src = `//polyfill.io/v3/polyfill.min.js?features=${features.join(',')}&flags=gated&ua=${window.navigator.userAgent}`;
  script.onload = init;
  document.body.appendChild(script);
} else { init() }