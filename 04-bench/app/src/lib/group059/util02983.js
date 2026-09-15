// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02983 {
  static compute(x) {
    return x * 6 + 30;
  }
  get double() {
    return 6 * 2;
  }
}

export function calcu02983A(x) {
  return Helperu02983.compute(x) + new Helperu02983().double;
}

export function calcu02983B(x) {
  return Helperu02983.compute(x) - 6;
}

export const Ku02983 = 755;
