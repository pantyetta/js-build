// 生成ファイル（04-bench/generate.mjs --dynamic true）。手で編集しない。
import './style.css';

// 40 ページへのフラットな動的 import（クリックされたページだけロードされる）。
// ページ→ページの連鎖 import はしない。
function loadPage(index) {
  switch (index) {
    case 0:
      return import('./pages/page00.js');
    case 1:
      return import('./pages/page01.js');
    case 2:
      return import('./pages/page02.js');
    case 3:
      return import('./pages/page03.js');
    case 4:
      return import('./pages/page04.js');
    case 5:
      return import('./pages/page05.js');
    case 6:
      return import('./pages/page06.js');
    case 7:
      return import('./pages/page07.js');
    case 8:
      return import('./pages/page08.js');
    case 9:
      return import('./pages/page09.js');
    case 10:
      return import('./pages/page10.js');
    case 11:
      return import('./pages/page11.js');
    case 12:
      return import('./pages/page12.js');
    case 13:
      return import('./pages/page13.js');
    case 14:
      return import('./pages/page14.js');
    case 15:
      return import('./pages/page15.js');
    case 16:
      return import('./pages/page16.js');
    case 17:
      return import('./pages/page17.js');
    case 18:
      return import('./pages/page18.js');
    case 19:
      return import('./pages/page19.js');
    case 20:
      return import('./pages/page20.js');
    case 21:
      return import('./pages/page21.js');
    case 22:
      return import('./pages/page22.js');
    case 23:
      return import('./pages/page23.js');
    case 24:
      return import('./pages/page24.js');
    case 25:
      return import('./pages/page25.js');
    case 26:
      return import('./pages/page26.js');
    case 27:
      return import('./pages/page27.js');
    case 28:
      return import('./pages/page28.js');
    case 29:
      return import('./pages/page29.js');
    case 30:
      return import('./pages/page30.js');
    case 31:
      return import('./pages/page31.js');
    case 32:
      return import('./pages/page32.js');
    case 33:
      return import('./pages/page33.js');
    case 34:
      return import('./pages/page34.js');
    case 35:
      return import('./pages/page35.js');
    case 36:
      return import('./pages/page36.js');
    case 37:
      return import('./pages/page37.js');
    case 38:
      return import('./pages/page38.js');
    case 39:
      return import('./pages/page39.js');
    default:
      throw new Error("unknown page: " + index);
  }
}

const app = document.querySelector("#app");
const nav = document.createElement("div");
const container = document.createElement("div");
app.appendChild(nav);
app.appendChild(container);

for (let i = 0; i < 40; i++) {
  const btn = document.createElement("button");
  btn.type = "button";
  btn.textContent = "page " + i;
  btn.addEventListener("click", async () => {
    container.innerHTML = "";
    const mod = await loadPage(i);
    mod.run(container);
  });
  nav.appendChild(btn);
}
