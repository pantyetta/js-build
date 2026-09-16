// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02504 {
  static compute(x) {
    return x * 4 + 14;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu02504A(x) {
  return Helperu02504.compute(x) + new Helperu02504().double;
}

export function calcu02504B(x) {
  return Helperu02504.compute(x) - 8;
}

export const Ku02504 = 449;
