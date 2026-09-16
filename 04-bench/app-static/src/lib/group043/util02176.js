// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02176 {
  static compute(x) {
    return x * 4 + 8;
  }
  get double() {
    return 4 * 2;
  }
}

export function calcu02176A(x) {
  return Helperu02176.compute(x) + new Helperu02176().double;
}

export function calcu02176B(x) {
  return Helperu02176.compute(x) - 11;
}

export const Ku02176 = 923;
