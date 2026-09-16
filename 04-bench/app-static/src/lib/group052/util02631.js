// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02631 {
  static compute(x) {
    return x * 16 + 24;
  }
  get double() {
    return 16 * 2;
  }
}

export function calcu02631A(x) {
  return Helperu02631.compute(x) + new Helperu02631().double;
}

export function calcu02631B(x) {
  return Helperu02631.compute(x) - 10;
}

export const Ku02631 = 861;
