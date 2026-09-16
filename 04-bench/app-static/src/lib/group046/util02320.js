// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02320 {
  static compute(x) {
    return x * 9 + 26;
  }
  get double() {
    return 9 * 2;
  }
}

export function calcu02320A(x) {
  return Helperu02320.compute(x) + new Helperu02320().double;
}

export function calcu02320B(x) {
  return Helperu02320.compute(x) - 28;
}

export const Ku02320 = 538;
