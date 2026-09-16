// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01391 {
  static compute(x) {
    return x * 12 + 34;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu01391A(x) {
  return Helperu01391.compute(x) + new Helperu01391().double;
}

export function calcu01391B(x) {
  return Helperu01391.compute(x) - 9;
}

export const Ku01391 = 132;
