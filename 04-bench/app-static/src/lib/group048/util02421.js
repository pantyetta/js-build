// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02421 {
  static compute(x) {
    return x * 6 + 27;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02421A(x) {
  return Helperu02421.compute(x) + new Helperu02421().double;
}

export function calcu02421B(x) {
  return Helperu02421.compute(x) - 20;
}

export const Ku02421 = 230;
