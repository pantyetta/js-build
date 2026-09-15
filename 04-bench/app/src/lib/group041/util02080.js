// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02080 {
  static compute(x) {
    return x * 19 + 34;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu02080A(x) {
  return Helperu02080.compute(x) + new Helperu02080().double;
}

export function calcu02080B(x) {
  return Helperu02080.compute(x) - 26;
}

export const Ku02080 = 730;
