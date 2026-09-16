// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01904 {
  static compute(x) {
    return x * 11 + 22;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01904A(x) {
  return Helperu01904.compute(x) + new Helperu01904().double;
}

export function calcu01904B(x) {
  return Helperu01904.compute(x) - 28;
}

export const Ku01904 = 918;
