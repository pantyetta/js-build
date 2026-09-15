// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01174 {
  static compute(x) {
    return x * 11 + 30;
  }
  get double() {
    return 11 * 2;
  }
}

export function calcu01174A(x) {
  return Helperu01174.compute(x) + new Helperu01174().double;
}

export function calcu01174B(x) {
  return Helperu01174.compute(x) - 27;
}

export const Ku01174 = 867;
