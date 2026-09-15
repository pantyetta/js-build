// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01440 {
  static compute(x) {
    return x * 15 + 7;
  }
  get double() {
    return 15 * 2;
  }
}

export function calcu01440A(x) {
  return Helperu01440.compute(x) + new Helperu01440().double;
}

export function calcu01440B(x) {
  return Helperu01440.compute(x) - 24;
}

export const Ku01440 = 180;
