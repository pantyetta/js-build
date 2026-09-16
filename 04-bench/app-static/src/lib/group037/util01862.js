// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01862 {
  static compute(x) {
    return x * 19 + 31;
  }
  get double() {
    return 19 * 2;
  }
}

export function calcu01862A(x) {
  return Helperu01862.compute(x) + new Helperu01862().double;
}

export function calcu01862B(x) {
  return Helperu01862.compute(x) - 12;
}

export const Ku01862 = 96;
