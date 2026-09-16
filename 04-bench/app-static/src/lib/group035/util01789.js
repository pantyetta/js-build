// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01789 {
  static compute(x) {
    return x * 2 + 13;
  }
  get double() {
    return 2 * 2;
  }
}

export function calcu01789A(x) {
  return Helperu01789.compute(x) + new Helperu01789().double;
}

export function calcu01789B(x) {
  return Helperu01789.compute(x) - 20;
}

export const Ku01789 = 267;
