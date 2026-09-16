// 生成ファイル（04-bench/generate.mjs）。手で編集しない。
// variant 2 — import なしの葉モジュール。

class Helperu02417 {
  static compute(x) {
    return x * 12 + 29;
  }
  get double() {
    return 12 * 2;
  }
}

export function calcu02417A(x) {
  return Helperu02417.compute(x) + new Helperu02417().double;
}

export function calcu02417B(x) {
  return Helperu02417.compute(x) - 19;
}

export const Ku02417 = 715;
