// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01628 {
  static compute(x) {
    return x * 10 + 25;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01628A(x) {
  return Helperu01628.compute(x) + new Helperu01628().double;
}

export function calcu01628B(x) {
  return Helperu01628.compute(x) - 5;
}

export const Ku01628 = 731;
