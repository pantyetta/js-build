// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02221 {
  static compute(x) {
    return x * 6 + 15;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02221A(x) {
  return Helperu02221.compute(x) + new Helperu02221().double;
}

export function calcu02221B(x) {
  return Helperu02221.compute(x) - 21;
}

export const Ku02221 = 897;
