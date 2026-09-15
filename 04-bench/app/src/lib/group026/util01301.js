// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01301 {
  static compute(x) {
    return x * 10 + 9;
  }
  get double() {
    return 10 * 2;
  }
}

export function calcu01301A(x) {
  return Helperu01301.compute(x) + new Helperu01301().double;
}

export function calcu01301B(x) {
  return Helperu01301.compute(x) - 2;
}

export const Ku01301 = 965;
