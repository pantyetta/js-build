// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02203 {
  static compute(x) {
    return x * 7 + 35;
  }
  get double() {
    return 7 * 2;
  }
}

export function calcu02203A(x) {
  return Helperu02203.compute(x) + new Helperu02203().double;
}

export function calcu02203B(x) {
  return Helperu02203.compute(x) - 17;
}

export const Ku02203 = 478;
