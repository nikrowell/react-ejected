import React from 'react';
import { render } from 'react-dom';
import App from 'components/App';
import '../scss/index.scss';

window.debug = process.env.NODE_ENV === 'development' ? (obj, style = {}) => (
  <pre style={{maxWidth:'100%',overflow:'scroll', ...style}}>{JSON.stringify(obj, null, 2)}</pre>
) : fn => null;

console.log(process.env.NODE_ENV);
console.log(process.env.SECRET);

function init() {
  const root = document.createElement('div');
  document.body.appendChild(root);
  render(<App />, root);
}

// https://polyfill.io/v2/docs/features/
const features = [];
// ('fetch' in window) || features.push('fetch');
// ('Promise' in window) || features.push('Promise');
// ('assign' in Object) || features.push('Object.assign');
// ('from' in Array) || features.push('Array.from');
// ('find' in Array.prototype) || features.push('Array.prototype.find');
// ('includes' in Array.prototype) || features.push('Array.prototype.includes');

if(features.length) {
  const script = document.createElement('script');
  script.src = `//cdn.polyfill.io/v2/polyfill.min.js?features=${features.join(',')}&flags=gated,always&ua=${window.navigator.userAgent}`;
  script.onload = init;
  document.body.appendChild(script);
} else { init() }