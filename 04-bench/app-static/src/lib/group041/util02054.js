// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02054 {
  static compute(x) {
    return x * 2 + 32;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu02054A(x) {
  return Helperu02054.compute(x) + new Helperu02054().double;
}

export function calcu02054B(x) {
  return Helperu02054.compute(x) - 24;
}

export const Ku02054 = 75;
