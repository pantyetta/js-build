// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu01779 {
  static compute(x) {
    return x * 18 + 10;
  }
  get double() {
    return 18 * 2;
  }
}

export function calcu01779A(x) {
  return Helperu01779.compute(x) + new Helperu01779().double;
}

export function calcu01779B(x) {
  return Helperu01779.compute(x) - 22;
}

export const Ku01779 = 728;
