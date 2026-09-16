// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02990 {
  static compute(x) {
    return x * 12 + 5;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu02990A(x) {
  return Helperu02990.compute(x) + new Helperu02990().double;
}

export function calcu02990B(x) {
  return Helperu02990.compute(x) - 6;
}

export const Ku02990 = 83;
