// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02985 {
  static compute(x) {
    return x * 17 + 20;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu02985A(x) {
  return Helperu02985.compute(x) + new Helperu02985().double;
}

export function calcu02985B(x) {
  return Helperu02985.compute(x) - 6;
}

export const Ku02985 = 967;
