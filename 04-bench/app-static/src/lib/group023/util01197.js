// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01197 {
  static compute(x) {
    return x * 12 + 5;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu01197A(x) {
  return Helperu01197.compute(x) + new Helperu01197().double;
}

export function calcu01197B(x) {
  return Helperu01197.compute(x) - 4;
}

export const Ku01197 = 16;
