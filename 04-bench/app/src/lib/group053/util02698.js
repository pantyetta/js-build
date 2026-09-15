// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02698 {
  static compute(x) {
    return x * 18 + 15;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu02698A(x) {
  return Helperu02698.compute(x) + new Helperu02698().double;
}

export function calcu02698B(x) {
  return Helperu02698.compute(x) - 13;
}

export const Ku02698 = 423;
