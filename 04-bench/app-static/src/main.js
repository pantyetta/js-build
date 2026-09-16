// 生成ファイル（04-bench/generate.mjs --dynamic false）。手で編集しない。
import './style.css';

// 40 ページを全部静的 import。import() は 1 つも使わない（コード分割なし）。
import { run as runPage00 } from './pages/page00.js';
import { run as runPage01 } from './pages/page01.js';
import { run as runPage02 } from './pages/page02.js';
import { run as runPage03 } from './pages/page03.js';
import { run as runPage04 } from './pages/page04.js';
import { run as runPage05 } from './pages/page05.js';
import { run as runPage06 } from './pages/page06.js';
import { run as runPage07 } from './pages/page07.js';
import { run as runPage08 } from './pages/page08.js';
import { run as runPage09 } from './pages/page09.js';
import { run as runPage10 } from './pages/page10.js';
import { run as runPage11 } from './pages/page11.js';
import { run as runPage12 } from './pages/page12.js';
import { run as runPage13 } from './pages/page13.js';
import { run as runPage14 } from './pages/page14.js';
import { run as runPage15 } from './pages/page15.js';
import { run as runPage16 } from './pages/page16.js';
import { run as runPage17 } from './pages/page17.js';
import { run as runPage18 } from './pages/page18.js';
import { run as runPage19 } from './pages/page19.js';
import { run as runPage20 } from './pages/page20.js';
import { run as runPage21 } from './pages/page21.js';
import { run as runPage22 } from './pages/page22.js';
import { run as runPage23 } from './pages/page23.js';
import { run as runPage24 } from './pages/page24.js';
import { run as runPage25 } from './pages/page25.js';
import { run as runPage26 } from './pages/page26.js';
import { run as runPage27 } from './pages/page27.js';
import { run as runPage28 } from './pages/page28.js';
import { run as runPage29 } from './pages/page29.js';
import { run as runPage30 } from './pages/page30.js';
import { run as runPage31 } from './pages/page31.js';
import { run as runPage32 } from './pages/page32.js';
import { run as runPage33 } from './pages/page33.js';
import { run as runPage34 } from './pages/page34.js';
import { run as runPage35 } from './pages/page35.js';
import { run as runPage36 } from './pages/page36.js';
import { run as runPage37 } from './pages/page37.js';
import { run as runPage38 } from './pages/page38.js';
import { run as runPage39 } from './pages/page39.js';

function runPage(index, container) {
  switch (index) {
    case 0:
      return runPage00(container);
    case 1:
      return runPage01(container);
    case 2:
      return runPage02(container);
    case 3:
      return runPage03(container);
    case 4:
      return runPage04(container);
    case 5:
      return runPage05(container);
    case 6:
      return runPage06(container);
    case 7:
      return runPage07(container);
    case 8:
      return runPage08(container);
    case 9:
      return runPage09(container);
    case 10:
      return runPage10(container);
    case 11:
      return runPage11(container);
    case 12:
      return runPage12(container);
    case 13:
      return runPage13(container);
    case 14:
      return runPage14(container);
    case 15:
      return runPage15(container);
    case 16:
      return runPage16(container);
    case 17:
      return runPage17(container);
    case 18:
      return runPage18(container);
    case 19:
      return runPage19(container);
    case 20:
      return runPage20(container);
    case 21:
      return runPage21(container);
    case 22:
      return runPage22(container);
    case 23:
      return runPage23(container);
    case 24:
      return runPage24(container);
    case 25:
      return runPage25(container);
    case 26:
      return runPage26(container);
    case 27:
      return runPage27(container);
    case 28:
      return runPage28(container);
    case 29:
      return runPage29(container);
    case 30:
      return runPage30(container);
    case 31:
      return runPage31(container);
    case 32:
      return runPage32(container);
    case 33:
      return runPage33(container);
    case 34:
      return runPage34(container);
    case 35:
      return runPage35(container);
    case 36:
      return runPage36(container);
    case 37:
      return runPage37(container);
    case 38:
      return runPage38(container);
    case 39:
      return runPage39(container);
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
  btn.addEventListener("click", () => {
    container.innerHTML = "";
    runPage(i, container);
  });
  nav.appendChild(btn);
}
