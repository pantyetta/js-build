// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01592 {
  static compute(x) {
    return x * 10 + 27;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01592A(x) {
  return Helperu01592.compute(x) + new Helperu01592().double;
}

export function calcu01592B(x) {
  return Helperu01592.compute(x) - 21;
}

export const Ku01592 = 68;
