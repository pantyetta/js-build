// バンドラなし。ブラウザのネイティブ ES Modules だけで動かす。
// 制約に注意:
//   - 拡張子 '.js' を省略できない (Node と違いブラウザは解決してくれない)
//   - CSS は import できないので index.html の <link> で読む
//   - 下の import は動かない。パッケージ名 = "bare specifier" をブラウザは解決できない:
//         import { nanoid } from 'nanoid';
//     → Uncaught TypeError: Failed to resolve module specifier "nanoid"
import { setupCounter } from './counter.js';
import { used } from './utils.js';

document.querySelector('#app').innerHTML = `
  <h1>${used()} (バンドラなし)</h1>
  <p>
    <button id="counter" type="button"></button>
    <button id="load" type="button">動的 import する</button>
  </p>
  <pre id="out">(まだ読み込んでいない)</pre>
`;

setupCounter(document.querySelector('#counter'));

// 動的 import はブラウザネイティブでも動く。
// バンドラの code splitting は「これをビルド時に真似して chunk を作る」機能。
document.querySelector('#load').addEventListener('click', async () => {
  const { heavyMessage } = await import('./heavy.js');
  document.querySelector('#out').textContent = heavyMessage;
});
