// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02920 {
  static compute(x) {
    return x * 10 + 34;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu02920A(x) {
  return Helperu02920.compute(x) + new Helperu02920().double;
}

export function calcu02920B(x) {
  return Helperu02920.compute(x) - 15;
}

export const Ku02920 = 276;
