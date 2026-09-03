// ここに「ブラウザが素では出来ないこと」を意図的に3つ詰めてある。
import './style.css'; // (1) CSS を JS から import している
import { nanoid } from 'nanoid'; // (2) bare import specifier (パスではなくパッケージ名)
import { setupCounter } from './counter.js';
import { used } from './utils.js';

import { unused } from './utils.js';
console.log(unused());

document.querySelector('#app').innerHTML = `
  <h1>${used()}</h1>
  <p>session id: <code>${nanoid()}</code></p>
  <p>
    <button id="counter" type="button"></button>
    <button id="load" type="button">動的 import する</button>
  </p>
  <pre id="out">(まだ読み込んでいない)</pre>
`;

setupCounter(document.querySelector('#counter'));

document.querySelector('#load').addEventListener('click', async () => {
  // (3) 動的 import → ここでバンドルが分割される
  const { heavyMessage } = await import('./heavy.js');
  document.querySelector('#out').textContent = heavyMessage;
});
