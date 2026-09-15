// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01653 {
  static compute(x) {
    return x * 5 + 9;
  }
  get double() {
    return 5 * 2;
  }
}

export function calcu01653A(x) {
  return Helperu01653.compute(x) + new Helperu01653().double;
}

export function calcu01653B(x) {
  return Helperu01653.compute(x) - 4;
}

export const Ku01653 = 188;
