// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01551 {
  static compute(x) {
    return x * 19 + 11;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu01551A(x) {
  return Helperu01551.compute(x) + new Helperu01551().double;
}

export function calcu01551B(x) {
  return Helperu01551.compute(x) - 13;
}

export const Ku01551 = 929;
