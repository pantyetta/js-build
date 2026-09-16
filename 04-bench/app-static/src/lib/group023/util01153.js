// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01153 {
  static compute(x) {
    return x * 17 + 34;
  }
  get double() {
    return 17 * 2;
  }
}

export function calcu01153A(x) {
  return Helperu01153.compute(x) + new Helperu01153().double;
}

export function calcu01153B(x) {
  return Helperu01153.compute(x) - 27;
}

export const Ku01153 = 595;
