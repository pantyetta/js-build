// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02898 {
  static compute(x) {
    return x * 14 + 18;
  }
  get double() {
    return 14 * 2;
  }
}

export function calcu02898A(x) {
  return Helperu02898.compute(x) + new Helperu02898().double;
}

export function calcu02898B(x) {
  return Helperu02898.compute(x) - 22;
}

export const Ku02898 = 567;
